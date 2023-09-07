import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import symbolSdk from 'symbol-sdk';

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
  let { signerPublicKey, duration, divisibility, flags, action, delta, feeMultiplier, networkType, deadline } =
    req.query;
  const _feeMultiplier = feeMultiplier == undefined ? 100 : Number(feeMultiplier);
  const facade = new symbolSdk.facade.SymbolFacade(networkType == '0' ? 'mainnet' : 'testnet');
  deadline =
    deadline == undefined
      ? new symbolSdk.symbol.NetworkTimestamp(facade.network.fromDatetime(Date.now())).addHours(2).timestamp
      : new symbolSdk.symbol.NetworkTimestamp(deadline).timestamp;
  let flagsStr = '';
  if (Array.isArray(flags)) {
    for (let i = 0; i < flags.length; i++) {
      if (i !== 0) flagsStr += ' ';
      flagsStr += flags[i];
    }
  } else if (typeof flags == 'string') {
    flagsStr = flags;
  }
  const address = facade.network.publicKeyToAddress(
    new symbolSdk.PublicKey(symbolSdk.utils.hexToUint8(signerPublicKey))
  );
  const nonce = crypto.randomInt(10000);
  const mosaicId = symbolSdk.symbol.generateMosaicId(address, nonce);
  const mosaicDefinition = facade.transactionFactory.createEmbedded({
    type: 'mosaic_definition_transaction_v1',
    signerPublicKey,
    duration: BigInt(Number(duration)),
    divisibility: Number(divisibility),
    nonce: nonce,
    flags: flagsStr,
  });
  const mosaicSupplyChange = facade.transactionFactory.createEmbedded({
    type: 'mosaic_supply_change_transaction_v1',
    signerPublicKey,
    mosaicId,
    action,
    delta: BigInt(Number(delta)),
  });
  const embeddedTransactions = [mosaicDefinition, mosaicSupplyChange];
  const merkleHash = facade.constructor.hashEmbeddedTransactions(embeddedTransactions);
  const aggregateTransaction = facade.transactionFactory.create({
    type: 'aggregate_complete_transaction_v2',
    deadline,
    transactionsHash: merkleHash,
    transactions: embeddedTransactions,
  });
  aggregateTransaction.fee = new symbolSdk.symbol.Amount(BigInt(aggregateTransaction.size * _feeMultiplier));
  res.status(200).json({ payload: symbolSdk.utils.uint8ToHex(aggregateTransaction.serialize()) });
}
