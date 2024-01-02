export default interface Transaction {
  size: number;
  signature: string;
  signerPublicKey: string;
  version: number;
  network: number;
  type: number;
  maxFee: string;
  deadline: string;
  recipientAddress: string;
  message: string;
  mosaics: Array<{
    id: string;
    amount: string;
  }>;
}

interface Meta {
  height: string;
  hash: string;
  merkleComponentHash: string;
  index: number;
  timestamp: string;
  feeMultiplier: number;
}

interface TransactionData {
  meta: Meta;
  transaction: Transaction;
  id: string;
}
