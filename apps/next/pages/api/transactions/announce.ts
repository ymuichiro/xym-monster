import type { NextApiRequest, NextApiResponse } from 'next/types';
import WebSocket from 'ws';
import symbolSdk from 'symbol-sdk';
import {
  AnnounceTransactionRequest,
  Configuration,
  TransactionRoutesApi,
} from 'symbol-rest';

export default async function create(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      return await getHandle(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}

async function getHandle(req: NextApiRequest, res: NextApiResponse) {
  let { node, payload } = req.query;
  const tranasction = symbolSdk.symbol.TransactionFactory.deserialize(symbolSdk.utils.hexToUint8(payload));
  let facade;
  switch(tranasction.network) {
    case symbolSdk.symbol.NetworkType.MAINNET:
      facade = new symbolSdk.facade.SymbolFacade('mainnet');
      break;
    case symbolSdk.symbol.NetworkType.TESTNET:
      facade = new symbolSdk.facade.SymbolFacade('testnet');
      break;
    default:
      throw new Error('invalid network type');
  }
  const plainAddress = facade.network.publicKeyToAddress(tranasction.signerPublicKey).toString();
  const signedTransactionHash = facade.hashTransaction(tranasction).toString();

  return await new Promise(function (resolve, reject) {
    if(node === undefined || Array.isArray(node)) throw new Error('node is undefined or array');
    if(payload === undefined || Array.isArray(payload)) throw new Error('payload is undefined or array');
    const wsNode = node.replace('https', 'wss') + '/ws';
    const ws = new WebSocket(wsNode);
    const transactionRoutesApi = new TransactionRoutesApi(
      new Configuration({
        basePath: node,
      })
    );
    const requestParameters: AnnounceTransactionRequest = {
      transactionPayload: {
        payload,
      },
    };
    ws.addEventListener('open', () => {
      transactionRoutesApi.announceTransaction(requestParameters).catch(() => {
        ws.close();
        res.status(500).json({ error: 'Failed to announce transaction' });
        console.log('Failed to announce transaction');
        resolve(res);
      });
    });
    ws.addEventListener('close', () => {});
    ws.addEventListener('message', (message) => {
      const responce = JSON.parse(message.data);
      const statusFlag: string = `status/${plainAddress}`;
      const confirmedFlag: string = `confirmedAdded/${plainAddress}`;
      if ('uid' in responce) {
        const body1: { [key: string]: string } = { uid: responce.uid, subscribe: statusFlag };
        const body2: { [key: string]: string } = { uid: responce.uid, subscribe: confirmedFlag };
        ws.send(JSON.stringify(body1));
        ws.send(JSON.stringify(body2));
      } else {
        if (responce.topic === statusFlag) {
          if (responce.data.hash === signedTransactionHash) {
            ws.close();
            res.status(500).json({ error: responce.data.code });
            console.log(`Transaction failed: ${responce.data.code}`);
            resolve(res);
          }
        } else if (responce.topic === confirmedFlag) {
          if (responce.data.meta.hash === signedTransactionHash) {
            ws.close();
            res.status(200).json({ payload: payload, hash: signedTransactionHash });
            console.log(`Transaction confirmed: ${signedTransactionHash}`);
            resolve(res);
          }
        }
      }
    });
  });
}