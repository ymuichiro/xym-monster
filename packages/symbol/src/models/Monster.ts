export enum MonsterRarity {
  Common = 0,
  Uncommon = 1,
  Rare = 2,
  Epic = 3,
  Legendary = 4
}

export class Monster {
  name: string;
  //metalId: string;
  mosaicId: string;
  rarity: MonsterRarity;
  constructor(name: string, mosaicId: string, rarity: MonsterRarity){
      this.name = name;
      this.mosaicId = mosaicId;
      this.rarity = rarity;
  }
}

// モンスターのリスト
export const CommonMonsters: Monster[] = [
  new Monster("CommonMonster0", "037CD1CE71325442", MonsterRarity.Common),
  new Monster("CommonMonster1", "4EB65C4005959604", MonsterRarity.Common),
  new Monster("CommonMonster2", "46DAD2555469751E", MonsterRarity.Common),
  new Monster("CommonMonster3", "7066EE651BA429E8", MonsterRarity.Common),
  new Monster("CommonMonster4", "56148181AF8A6CFC", MonsterRarity.Common),
  new Monster("CommonMonster5", "08C9ECFB6AD20F72", MonsterRarity.Common),
  new Monster("CommonMonster6", "52FBEE24610DE08F", MonsterRarity.Common),
]

export const UncommonMonsters: Monster[] = [
  new Monster("UncommonMonster0", "237C711B23CCD42B", MonsterRarity.Uncommon),
  new Monster("UncommonMonster1", "36185082BDE0A700", MonsterRarity.Uncommon),
  new Monster("UncommonMonster2", "19D15B39DB0AE496", MonsterRarity.Uncommon),
  new Monster("UncommonMonster3", "4C7141DF61F6B7AC", MonsterRarity.Uncommon),
  new Monster("UncommonMonster4", "4096B2107CD03294", MonsterRarity.Uncommon),
  new Monster("UncommonMonster5", "4F00A8BC94449988", MonsterRarity.Uncommon),
  new Monster("UncommonMonster6", "668AB4C080666344", MonsterRarity.Uncommon),
  new Monster("UncommonMonster7", "2B60EB035BEDE04F", MonsterRarity.Uncommon),
  new Monster("UncommonMonster8", "2ED6D67F4AC82F33", MonsterRarity.Uncommon),
  new Monster("UncommonMonster9", "1DB0144D4F172068", MonsterRarity.Uncommon),
  new Monster("UncommonMonster10", "5FA4C71B41D1BBC0", MonsterRarity.Uncommon),
  new Monster("UncommonMonster11", "585DC118EC5850F6", MonsterRarity.Uncommon),
  new Monster("UncommonMonster12", "775E87786E6EF0F8", MonsterRarity.Uncommon),
  new Monster("UncommonMonster13", "09745ED14DEB33F7", MonsterRarity.Uncommon),
  new Monster("UncommonMonster14", "076E1A26C45CFE36", MonsterRarity.Uncommon),
  new Monster("UncommonMonster15", "2097FD3264BD2FA0", MonsterRarity.Uncommon),
  new Monster("UncommonMonster16", "1E0314D47BEC1F7E", MonsterRarity.Uncommon),
  new Monster("UncommonMonster17", "08FC65E1F88B34AD", MonsterRarity.Uncommon),
  new Monster("UncommonMonster18", "0F7CD3C20F07E122", MonsterRarity.Uncommon),
  new Monster("UncommonMonster19", "0C33E1308A153888", MonsterRarity.Uncommon),
  new Monster("UncommonMonster20", "3B6347B117579DE1", MonsterRarity.Uncommon),
  new Monster("UncommonMonster21", "215E94CE2BED839F", MonsterRarity.Uncommon),
  new Monster("UncommonMonster22", "0C62A14154FBB187", MonsterRarity.Uncommon),
  new Monster("UncommonMonster23", "5569EA843BC09A72", MonsterRarity.Uncommon),
]

export const RareMonsters: Monster[] = [
  new Monster("RareMonster0", "2B609327F9B738E8", MonsterRarity.Rare),
  new Monster("RareMonster1", "3766E6CD4DBB3DD8", MonsterRarity.Rare),
  new Monster("RareMonster2", "20792D54CAAB8376", MonsterRarity.Rare),
  new Monster("RareMonster3", "446BDC77E660315B", MonsterRarity.Rare),
  new Monster("RareMonster4", "53F6DB2B04C42D91", MonsterRarity.Rare),
  new Monster("RareMonster5", "1F3495AB1E537E51", MonsterRarity.Rare),
  new Monster("RareMonster6", "32DE1F5C01691AFD", MonsterRarity.Rare),
  new Monster("RareMonster7", "021EB182AB06959C", MonsterRarity.Rare),
  new Monster("RareMonster8", "45CC7C303B4B3D2C", MonsterRarity.Rare),
  new Monster("RareMonster9", "294AD8AB74B9AF3C", MonsterRarity.Rare),
  new Monster("RareMonster10", "11BC8DDD576013EE", MonsterRarity.Rare),
  new Monster("RareMonster11", "56FA0D08C907A9CC", MonsterRarity.Rare),
  new Monster("RareMonster12", "4E505AD99DA5BE31", MonsterRarity.Rare),
  new Monster("RareMonster13", "726D8DA0B1A1DA1D", MonsterRarity.Rare),
  new Monster("RareMonster14", "7D202E7B986EACC6", MonsterRarity.Rare),
  new Monster("RareMonster15", "6014A5436D9B2D18", MonsterRarity.Rare),
  new Monster("RareMonster16", "0938EA0F2E13598B", MonsterRarity.Rare),
  new Monster("RareMonster17", "1485B779572A82DB", MonsterRarity.Rare),
]

export const EpicMonsters: Monster[] = [
  new Monster("EpicMonster0", "734E3F7C85B85FC5", MonsterRarity.Epic),
  new Monster("EpicMonster1", "376509CE24CAEB8C", MonsterRarity.Epic),
  new Monster("EpicMonster2", "38C6C22382D240AF", MonsterRarity.Epic),
  new Monster("EpicMonster3", "50D150848C71760C", MonsterRarity.Epic),
  new Monster("EpicMonster4", "72F0200A5B5B11ED", MonsterRarity.Epic),
  new Monster("EpicMonster5", "5309AF3A463EC115", MonsterRarity.Epic),
  new Monster("EpicMonster6", "7062C04E89F0DCBF", MonsterRarity.Epic),
  new Monster("EpicMonster7", "7793547EBC77470A", MonsterRarity.Epic),
  new Monster("EpicMonster8", "4E1792EC6B4C0506", MonsterRarity.Epic),
  new Monster("EpicMonster9", "3684EF90A7042E5F", MonsterRarity.Epic),
  new Monster("EpicMonster10", "01494A035AC4B2B8", MonsterRarity.Epic),
  new Monster("EpicMonster11", "092EDD748058F0BF", MonsterRarity.Epic),
]

export const LegendaryMonsters: Monster[] = [
  new Monster("LegendaryMonster0", "62C2DA720E93E9D3", MonsterRarity.Legendary),
  new Monster("LegendaryMonster1", "39561AFD60CE53E1", MonsterRarity.Legendary),
  new Monster("LegendaryMonster2", "02B34BDA46B23850", MonsterRarity.Legendary),
  new Monster("LegendaryMonster3", "46750F71376D73DA", MonsterRarity.Legendary),
  new Monster("LegendaryMonster4", "2B6427F3B0676078", MonsterRarity.Legendary),
  new Monster("LegendaryMonster5", "732911C2AD7F7F4D", MonsterRarity.Legendary),
]
