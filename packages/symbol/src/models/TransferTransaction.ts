import Mosaic from './Mosaic';
import { NetworkType } from './NetworkType';
import Transaction from './Transaction';
import isMobileDevice from '../utils/isMobileDevice';
import TransactionBuilderService from '../services/TransactionBuilderService';
import { setMessage, requestSignEncription } from "sss-module";
import AccountService from '../services/AccountService';

export default class TransferTransaction extends Transaction{
  private recipientPublicKey?: string;
  constructor(
      public readonly node: string,
      public readonly backendUrl: string,
      public readonly networkType: NetworkType, 
      public readonly recipientAddress: string, 
      public readonly deadline?: BigInt, 
      public readonly feeMultiplier?: number, 
      public readonly mosaics?: Mosaic[], 
      public message?: string,
      public readonly isEncrypt?: boolean,
      ){
      super(node, networkType, deadline, feeMultiplier)
  }

  public override async build(){
    if(this.isEncrypt) {
      // 受信者アドレスから公開鍵を取得する必要がある
      const accountService = new AccountService(this.recipientAddress);
      const acc = await accountService.getAccountInfo(this.node);
      this.recipientPublicKey = acc.account.publicKey;

      // SSSの場合はここで暗号化する
      if(!isMobileDevice() && this.message !== undefined) {
        setMessage(this.message, this.recipientPublicKey);
        const encryptedMessage = await requestSignEncription();
        // 暗号化したメッセージをpayloadにセットするがSSSでの暗号化メッセージはv2を利用していることに注意
        this.message = encryptedMessage.payload;
      }
    }
    // aLiceの場合はv3仕様で、aLice内で暗号化するのでこのままで良い
    this.payload = await TransactionBuilderService.buildTransferTransaction(this);
  }

  public override async sign(): Promise<string>{
    if(this.isEncrypt && isMobileDevice()) {
      if(this.payload == '') await this.build();
      window.location.href = `alice://sign?type=request_sign_transaction&data=${this.payload}&recipient_publicKey_for_encrypt_message=${this.recipientPublicKey}`;
      return 'aLice';
    }
    return await super.sign()
  }
}