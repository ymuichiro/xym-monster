import type { NextApiRequest, NextApiResponse } from 'next/types';
import symbolSdk from 'symbol-sdk';

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            return await getHandle(req, res);
    }
        return res.status(405).end();
    } catch (err) {
        console.error(err);
        return res.status(500).end();
    }
}
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
  try {
    let { payload } = req.body;
    console.log(payload);
    const tranasction = symbolSdk.symbol.TransactionFactory.deserialize(symbolSdk.utils.hexToUint8(payload));
    const facade = new symbolSdk.facade.SymbolFacade(tranasction.network.value == "104" ? "mainnet" : "testnet");
    const address = facade.network.publicKeyToAddress(tranasction.signerPublicKey).toString();
    const hash = facade.hashTransaction(tranasction).toString();
    res.status(200).json({ address, hash});
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}