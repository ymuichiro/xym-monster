import { NetworkType } from './NetworkType';
import { requestSign, setTransactionByPayload } from 'sss-module';
import isMobileDevice from '../utils/isMobileDevice';
import { utf8ToHex } from '../utils/converter';
import TransactionService from '../services/TransactionService';

const BACKEND = TransactionService.BACKEND;

export default class Transaction {
  constructor(
    public networkType?: NetworkType, 
    public deadline?: BigInt, 
    public feeMultiplier?: number,
    public payload: string = ''){}

  async build(){};

  public async sign(): Promise<string> {
    if(this.payload == '') await this.build();

    if(isMobileDevice()) {
      window.location.href = `alice://sign?type=request_sign_transaction&data=${this.payload}`;
      return 'aLice';
    } else {
      setTransactionByPayload(this.payload);
      try {
        const signedTransaction = await requestSign();
        return signedTransaction.payload;
      } catch (error: any) {
        console.error(error.message);
      }
    }
    throw new Error('sign error');
  }
}