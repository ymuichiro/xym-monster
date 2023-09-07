import { AccountInfoDTO, AccountRoutesApi, Configuration, Mosaic } from 'symbol-rest';

export default class AccountService {
  private _mosaics: Mosaic[] = [];

  constructor(public readonly publicKey: string) {}

  public async getAccountInfo(node: string): Promise<AccountInfoDTO> {
    const config = new Configuration({
      basePath: node,
    });
    const accountRoutesApi = new AccountRoutesApi(config);
    const accountInfo = await accountRoutesApi.getAccountInfo({ accountId: this.publicKey });
    this._mosaics = accountInfo.account.mosaics;
    return accountInfo;
  }

  public async getCurrentmMosaics(node: string): Promise<Mosaic[]> {
    if ((this._mosaics = [])) {
      return this._mosaics;
    } else {
      const accountInfo = await this.getAccountInfo(node);
      return accountInfo.account.mosaics;
    }
  }
}
