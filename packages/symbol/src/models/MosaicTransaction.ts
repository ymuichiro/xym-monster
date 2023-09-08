import { NetworkType } from './NetworkType';
import Transaction from './Transaction';
import TransactionBuilderService from '../services/TransactionBuilderService';
export default class MosaicTransaction extends Transaction{
  constructor(
    public readonly node: string,
    public readonly backendUrl: string,
    public readonly signerPublicKey: string,
    public readonly duration: BigInt,
    public readonly divisibility: number,
    public readonly flags: string[],
    public readonly action: string,
    public readonly delta: BigInt,
    public readonly networkType?: NetworkType, 
    public readonly deadline?: BigInt, 
    public readonly feeMultiplier?: number, 
    ){
    super(node, networkType, deadline, feeMultiplier)
  }

  public override async build(){
    this.payload = await TransactionBuilderService.buildMosaicTransaction(this);
  }

  public override async sign(): Promise<string>{
    return await super.sign()
  }
}