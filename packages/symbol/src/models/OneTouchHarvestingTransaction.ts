import { NetworkType } from './NetworkType';
import Transaction from './Transaction';
import TransactionBuilderService from '../services/TransactionBuilderService';

export default class OneTouchHarvestingTransaction extends Transaction{
  constructor(
    public readonly node: string,
    public readonly backendUrl: string,
    public readonly publicKey: string,
    public readonly nodeUrl: string,
    public readonly networkType: NetworkType, 
    public readonly deadline?: BigInt, 
    public readonly feeMultiplier?: number, 
    ){
    super(node, networkType, deadline, feeMultiplier)
  }

  public override async build(){
    this.payload = await TransactionBuilderService.buildOneTouchHarvestingTransaction(this);
  }

  public override async sign(): Promise<string>{
    return await super.sign()
  }
}