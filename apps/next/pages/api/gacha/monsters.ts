import type { NextApiRequest, NextApiResponse } from 'next/types';
import { AccountService, CommonMonsters, UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters } from 'symbol'

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
}

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