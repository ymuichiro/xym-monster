import type { NextApiRequest, NextApiResponse } from 'next/types';
import { AccountService, NodeService } from 'symbol';
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
  let { publicKey, nodeUrl, feeMultiplier, networkType, deadline } = req.query;
  const _feeMultiplier = feeMultiplier == undefined ? 100 : Number(feeMultiplier);
  const facade = new symbolSdk.facade.SymbolFacade(networkType == '0' ? 'mainnet' : 'testnet');
  deadline =
    deadline == undefined
      ? new symbolSdk.symbol.NetworkTimestamp(facade.network.fromDatetime(Date.now())).addHours(2).timestamp
      : new symbolSdk.symbol.NetworkTimestamp(deadline).timestamp;
  if (typeof publicKey !== 'string') throw new Error('publicKey is not string');
  if (typeof nodeUrl !== 'string') throw new Error('nodeUrl is not string');
  const accountService = new AccountService(publicKey);
  const accountInfo = await accountService.getAccountInfo(nodeUrl);
  const nodeInfo = await NodeService.getNodeInfo(nodeUrl);
  const nodePublicKey = new symbolSdk.PublicKey(nodeInfo.nodePublicKey);

  const remoteAccountKeyPair = new facade.constructor.KeyPair(symbolSdk.PrivateKey.random());
  const vrfAccountKeyPair = new facade.constructor.KeyPair(symbolSdk.PrivateKey.random());

  let transactions = [];
  if (accountInfo.account.supplementalPublicKeys.linked != undefined) {
    const accountUnLinkTransaction = facade.transactionFactory.createEmbedded({
      signerPublicKey: publicKey,
      type: 'account_key_link_transaction_v1',
      linkedPublicKey: accountInfo.account.supplementalPublicKeys.linked.publicKey,
      linkAction: 'unlink',
    });
    transactions.push(accountUnLinkTransaction);
  }
  if (accountInfo.account.supplementalPublicKeys.vrf != undefined) {
    const vrfUnLinkTransaction = facade.transactionFactory.createEmbedded({
      signerPublicKey: publicKey,
      type: 'vrf_key_link_transaction_v1',
      linkedPublicKey: accountInfo.account.supplementalPublicKeys.vrf.publicKey,
      linkAction: 'unlink',
    });
    transactions.push(vrfUnLinkTransaction);
  }
  if (accountInfo.account.supplementalPublicKeys.node != undefined) {
    const nodeUnLinkTransaction = facade.transactionFactory.createEmbedded({
      signerPublicKey: publicKey,
      type: 'node_key_link_transaction_v1',
      linkedPublicKey: accountInfo.account.supplementalPublicKeys.node.publicKey,
      linkAction: 'unlink',
    });
    transactions.push(nodeUnLinkTransaction);
  }
  const accountKeyLinkTransaction = facade.transactionFactory.createEmbedded({
    signerPublicKey: publicKey,
    type: 'account_key_link_transaction_v1',
    linkedPublicKey: remoteAccountKeyPair.publicKey,
    linkAction: 'link',
  });
  transactions.push(accountKeyLinkTransaction);

  const vrfKeyLinkTransaction = facade.transactionFactory.createEmbedded({
    signerPublicKey: publicKey,
    type: 'vrf_key_link_transaction_v1',
    linkedPublicKey: vrfAccountKeyPair.publicKey,
    linkAction: 'link',
  });
  transactions.push(vrfKeyLinkTransaction);

  const nodeKeyLinkTransaction = facade.transactionFactory.createEmbedded({
    signerPublicKey: publicKey,
    type: 'node_key_link_transaction_v1',
    linkedPublicKey: nodeInfo.nodePublicKey,
    linkAction: 'link',
  });
  transactions.push(nodeKeyLinkTransaction);

  const messageEncoder = new symbolSdk.symbol.MessageEncoder(remoteAccountKeyPair);
  const harvestRequestPayload = messageEncoder.encodePersistentHarvestingDelegation(
    nodePublicKey,
    remoteAccountKeyPair,
    vrfAccountKeyPair
  );

  const persistentDelegationRequestTransaction = facade.transactionFactory.createEmbedded({
    signerPublicKey: publicKey,
    type: 'transfer_transaction_v1',
    message: harvestRequestPayload,
    recipientAddress: facade.network.publicKeyToAddress(nodePublicKey),
  });
  transactions.push(persistentDelegationRequestTransaction);

  const embeddedTransactions = transactions;
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
