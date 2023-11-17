import type { NextApiRequest, NextApiResponse } from 'next/types';
import { AccountService, CommonMonsters, UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters, TransactionService } from 'symbol'
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
    let { publicKey, node, network } = req.body;
    const facade = network == 152 ? new symbolSdk.facade.SymbolFacade('testnet') : new symbolSdk.facade.SymbolFacade('mainnet');
    const address = facade.network.publicKeyToAddress(new symbolSdk.PublicKey(symbolSdk.utils.hexToUint8(publicKey))).toString();
    const priv = new symbolSdk.PrivateKey(process.env.SYSTEM_PRIVATE_KEY);
    const keyPair = new symbolSdk.symbol.KeyPair(priv);
    const pubKey = keyPair.publicKey.toString()
    let mosaics: any = [];
    let count = 1;
    while (true) {
      const t = await TransactionService.searchConfirmedTransactions(node, {recipientAddress: address, signerPublicKey: pubKey, pageSize: 100, type: [16724], pageNumber: count});
      if(t.data.length == 0) break;
      t.data.forEach((tx: { transaction: { mosaics: any[]; }; }) => {
        tx.transaction.mosaics.forEach((mosaic: any) => {
          mosaics.push(mosaic);
        });
      });
      if(t.data.length < 100) break;
      count++;
    }

    const hasMonstersList = await hasMonsters(publicKey, node);

    const allMonsters = CommonMonsters.concat(UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters);
    const updatedMonsters = allMonsters.map(monster => {
      const mosaicId = monster.mosaicId;
      const mosaicExists = mosaics.some((m: { id: string; }) => m.id === mosaicId);
      const hasMosaic = hasMonstersList.find((m: { id: string; }) => m.id === mosaicId);
      return {
        no: monster.no,
        rarity: getRarityAsString(monster.rarity),
        name: mosaicExists ? monster.name : "??????",
        href: mosaicExists ? process.env.NEXT_PUBLIC_METAL_NODE + monster.metalId : "/egg.png",
        isHas: mosaicExists,
        amount: mosaicExists ? hasMosaic?.amount || 0 : undefined,
        mosaicId: mosaicExists ? mosaicId : "",
      };
    });
    res.status(200).json(updatedMonsters);
  } catch (err) {
    return res.status(200).json({error: "正しい公開鍵が設定されていません"});
  }
}

async function hasMonsters(publicKey: string, node: string){
  const accountService = new AccountService(publicKey)
  const acc = await accountService.getAccountInfo(node);
  return acc.account.mosaics;
}

/* 
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
  try {
    let { publicKey, node } = req.body;
    const accountService = new AccountService(publicKey)
    const acc = await accountService.getAccountInfo(node);
    const allMonsters = CommonMonsters.concat(UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters);

    const updatedMonsters = allMonsters.map(monster => {
      const mosaicId = monster.mosaicId;
      const mosaicExists = acc.account.mosaics.some(m => m.id === mosaicId);
      return {
        no: monster.no,
        rarity: getRarityAsString(monster.rarity),
        name: mosaicExists ? monster.name : "??????",
        href: mosaicExists ? process.env.NEXT_PUBLIC_METAL_NODE + monster.metalId : "/egg.png",
        isHas: mosaicExists,
      };
    });
    res.status(200).json(updatedMonsters);
  } catch (err) {
    return res.status(200).json({error: "正しい公開鍵が設定されていません"});
  }
} */

const getRarityAsString = (rarity: number) => {
  switch(rarity) {
    case 0:
      return 'common';
    case 1:
      return 'uncommon';
    case 2:
      return 'rare';
    case 3:
      return 'epic';
    case 4:
      return 'legendary';
    default:
      return 'common';
  }
}