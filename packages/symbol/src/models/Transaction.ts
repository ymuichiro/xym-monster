import { NetworkType } from './NetworkType';
import { requestSign, setTransactionByPayload } from 'sss-module';
import isMobileDevice from '../utils/isMobileDevice';

export default class Transaction {
  constructor(
    public node?: string,
    public networkType?: NetworkType, 
    public deadline?: BigInt, 
    public feeMultiplier?: number,
    public signerPublicKey?: string,
    public payload: string = ''){}

  async build(){};

  public async sign(): Promise<string> {
    if(this.payload == '') await this.build();

    if(isMobileDevice()) {
      let urlStr = `alice://sign?type=request_sign_transaction&data=${this.payload}`;
      if(this.signerPublicKey !== undefined) {
        urlStr += `&set_public_key=${this.signerPublicKey}}`;
      }
      const url = new URL(urlStr);
      window.location.href = url.toString();
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