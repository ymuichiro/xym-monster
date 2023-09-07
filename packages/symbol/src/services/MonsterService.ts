import { Monster, MonsterRarity } from '../models/Monster';

export default class MonsterService {
  commonMonsters: Monster[];
  uncommonMonsters: Monster[];
  rareMonsters: Monster[];
  epicMonsters: Monster[];
  legendaryMonsters: Monster[];
  constructor(_commonMonsters: Monster[], _uncommonMonsters: Monster[], _rareMonsters: Monster[], _epicMonsters: Monster[], _legendaryMonsters: Monster[]) {
    this.commonMonsters = _commonMonsters;
    this.uncommonMonsters = _uncommonMonsters;
    this.rareMonsters = _rareMonsters;
    this.epicMonsters = _epicMonsters;
    this.legendaryMonsters = _legendaryMonsters;
  }

  getMonsterRarity(mosaicId: string): MonsterRarity {
    if (this.commonMonsters.find((m: Monster) => m.mosaicId === mosaicId)) {
        return MonsterRarity.Common;
    } else if(this.uncommonMonsters.find((m: Monster) => m.mosaicId === mosaicId)) {
        return MonsterRarity.Uncommon;
    } else if(this.rareMonsters.find((m: Monster) => m.mosaicId === mosaicId)) {
        return MonsterRarity.Rare;
    } else if(this.epicMonsters.find((m: Monster) => m.mosaicId === mosaicId)) {
        return MonsterRarity.Epic;
    } else if(this.legendaryMonsters.find((m: Monster) => m.mosaicId === mosaicId)) {
        return MonsterRarity.Legendary;
    }
    throw new Error('mosaicId is not found');
}

  getMonsterName = (mosaicId: string): Monster | undefined => {
    let monster = this.commonMonsters.find((m: Monster) => m.mosaicId === mosaicId);
    if(monster !== undefined) return monster;
    monster = this.uncommonMonsters.find((m: Monster) => m.mosaicId === mosaicId);
    if(monster !== undefined) return monster;
    monster = this.rareMonsters.find((m: Monster) => m.mosaicId === mosaicId);
    if(monster !== undefined) return monster;
    monster = this.epicMonsters.find((m: Monster) => m.mosaicId === mosaicId);
    if(monster !== undefined) return monster;
    monster = this.legendaryMonsters.find((m: Monster) => m.mosaicId === mosaicId);
    if(monster !== undefined) return monster;
    return undefined;
  }

  // モンスターリストを渡すとランダムにモンスターを返す関数
  chooseMonsterFromList(monsters: Monster[]): Monster | undefined{
    if(monsters.length == 0) return undefined;
    const randomValue = Math.floor(Math.random() * monsters.length);
    return monsters[randomValue];
  }

  // レアリティを渡すとモンスターリストを返す関数
  getMonsterListFromRarity(rarity: MonsterRarity): Monster[] {
    switch(rarity){
        case MonsterRarity.Common:
            return this.commonMonsters;
        case MonsterRarity.Uncommon:
            return this.uncommonMonsters;
        case MonsterRarity.Rare:
            return this.rareMonsters;
        case MonsterRarity.Epic:
            return this.epicMonsters;
        case MonsterRarity.Legendary:
            return this.legendaryMonsters;
    }
  }

  compareRarities(rarity1: MonsterRarity, rarity2: MonsterRarity) {
    if (rarity1 < rarity2) {
        return {
            "lowRarity": rarity1,
            "highRarity": rarity2,
        }; // rarity1が下位
    } else if (rarity1 > rarity2) {
        return {
            "lowRarity": rarity2,
            "highRarity": rarity1,
        }; // rarity1が上位
    }
    return undefined;
  }

  // レアリティを渡すとそのレアリティより下のレアリティを返す関数
  getLowerRarity(rarity: MonsterRarity){
    switch(rarity){
        case MonsterRarity.Common:
            return MonsterRarity.Common;
        case MonsterRarity.Uncommon:
            return MonsterRarity.Common;
        case MonsterRarity.Rare:
            return MonsterRarity.Uncommon;
        case MonsterRarity.Epic:
            return MonsterRarity.Rare;
        case MonsterRarity.Legendary:
            return MonsterRarity.Epic;
    }
  }

  // レアリティを渡すとそのレアリティより上のレアリティを返す関数
  getHigherRarity(rarity: MonsterRarity){
    switch(rarity){
        case MonsterRarity.Common:
            return MonsterRarity.Uncommon;
        case MonsterRarity.Uncommon:
            return MonsterRarity.Rare;
        case MonsterRarity.Rare:
            return MonsterRarity.Epic;
        case MonsterRarity.Epic:
            return MonsterRarity.Legendary;
        case MonsterRarity.Legendary:
            return MonsterRarity.Legendary;
    }
  }

  getRandomOutcome(probabilities: number[]) {
    // 0から1の間のランダムな数値を生成
    const randomValue = Math.random();
    // 当選内容を決定
    let cumulativeProbability = 0;
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (randomValue <= cumulativeProbability) {
            return i; // 当選内容を1から始まる数値で返す
        }
    }
    // どの確率にも合致しなかった場合、undefinedを返す
    return undefined;
  }
}