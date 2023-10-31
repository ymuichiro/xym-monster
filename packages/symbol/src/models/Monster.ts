export enum MonsterRarity {
  Common = 0,
  Uncommon = 1,
  Rare = 2,
  Epic = 3,
  Legendary = 4
}

export class Monster {
  no: number;
  name: string;
  mosaicId: string;
  rarity: MonsterRarity;
  metalId: string;
  constructor(no: number, name: string, mosaicId: string, rarity: MonsterRarity, metalId: string){
    this.no = no;
      this.name = name;
      this.mosaicId = mosaicId;
      this.rarity = rarity;
      this.metalId = metalId;
  }
  getMonsterRarityAsString(): string {
      switch(this.rarity){
          case MonsterRarity.Common:
              return "Common";
          case MonsterRarity.Uncommon:
              return "Uncommon";
          case MonsterRarity.Rare:
              return "Rare";
          case MonsterRarity.Epic:
              return "Epic";
          case MonsterRarity.Legendary:
              return "Legendary";
      }
  }
}

// モンスターのリスト
export const CommonMonsters: Monster[] = [
  new Monster(1, "ノーマルエッグ", "53C3372632BF946A", MonsterRarity.Common, "FeGjv3X5Ytx5ewbRcotzjeru4oZU7dZCDxGqUM6FvSXXKV"),
  new Monster(2, "フレイムエッグ", "0B1775B69E917FC0", MonsterRarity.Common, "FeFBpLAiivCF929eV86eixZvQrGrXZnKJncsrYoPPggPWX"),
  new Monster(3, "スプラウトリング", "78B74C766C2567D7", MonsterRarity.Common, "Fe9Liggdn2wFEFhvLDwcJg6WmUke8vy5EyZHYckiDQzLrx"),
  new Monster(4, "ダークエッグ", "11AE9F2687A7712A", MonsterRarity.Common, "Fe2jkSiJ5TbsNanYnsbhLfkXoFtQBPBti3SUZD5EuFTYYd"),
  new Monster(5, "ロッキーエッグ", "6E13BA35201CA9FE", MonsterRarity.Common, "FeHE1j11xRMERpA5Q1LT7vpvZhTtwFUJBzyykRRBSh7kWd"),
  new Monster(6, "アクアエッグ", "55540C48CB47D315", MonsterRarity.Common, "FeJ5fgDKjJriR79aRpav6v59rFysPSzkxJtXyVGjjxupCD"),
  new Monster(7, "サニーエッグ", "4FE82E3A1DBBEFFE", MonsterRarity.Common, "Fe2n2UNypjTsAJFHvpiJk7vs2sdybisXcdCYGyt2tk2b4D"),
]

export const UncommonMonsters: Monster[] = [
  new Monster(8, "焼きタイ", "68E28CD568AAD3AF", MonsterRarity.Uncommon, "FeE9L4XtPMcNDLnzYdbziU28WFzgaoLZWAcWk29uqapqRW"),
  new Monster(9, "クリムゾンシェイド", "5D93E9C46D0A2E08", MonsterRarity.Uncommon, "FeGn8DMwptcuLtD1z1bG9UbPsn5eMMxGtRXMPH4xpm2SRi"),
  new Monster(10, "スライミー兄弟", "709635BA458FAE54", MonsterRarity.Uncommon, "Fe9ncMmeEzjnG15UejPeT8ggnQ8finNtBSEQQHpJ9zLYfw"),
  new Monster(11, "マシュマロマン", "7A8C57B227F4CF19", MonsterRarity.Uncommon, "Fe5Qu76gWEhHp6Dp6goLTEWb3KNuDtWkLAFk4uw5CuUTSF"),
  new Monster(12, "カミツキスッポン", "077EB88582345E5D", MonsterRarity.Uncommon, "FeEFdxFqE3dehQTWFd5phX3PfsbN6oQiPQTwusNdDE4rVM"),
  new Monster(13, "ワカメビースト", "4ECB62480FEED41C", MonsterRarity.Uncommon, "Fe3zvNHYgqHheGaPkCAKgzc56iPmniXdcvLWN9thPXGKmW"),
  new Monster(14, "オーブリー", "4A3FA0B5C19AD663", MonsterRarity.Uncommon, "Fe7Ae36t6PSL2847hPzNWQLi7vZRuCvKi5qhyRjeeZoAUT"),
  new Monster(15, "イモムシャ", "69811398B29B325E", MonsterRarity.Uncommon, "Fe4MwUXiMLC4JaxprvMgsE8W8WhVQZnvCZ7YhJ4Bzexfk9"),
  new Monster(16, "ロッキー", "44BE0BC7B9C7F1BB", MonsterRarity.Uncommon, "Fe4s3Ub6ZiQgHQMFxo6Ne6eKRgDDuSc3xkE4Hik4gEtCPV"),
  new Monster(17, "リザドン", "30A50ADE198CE5F5", MonsterRarity.Uncommon, "Fe9WnhKashcyKdeYjXafEpysVuSieU7H3dw2AurLBJEDnH"),
  new Monster(18, "ハッパ", "19040C2106E4AC37", MonsterRarity.Uncommon, "Fe3Ai8gp9K3ACUApNgXVPvs6hs77EwMn4ENdM7Wa5mQvPj"),
  new Monster(19, "セクシーボンバーマシュ子", "0E35402653EE6E1C", MonsterRarity.Uncommon, "FeCJxPhRB3ZgQ3x2QMvLWpWtURdVqxthUPceyhYKAkLDEy"),
  new Monster(20, "アップルバイト", "3D3E848EA4DFE17E", MonsterRarity.Uncommon, "FeGaaoLpLhPF3VXWT1HPcPm57H9XKx5b3aEpc1AVUGSyrK"),
  new Monster(21, "タイマツキッド", "2CE11A741B82A4A1", MonsterRarity.Uncommon, "FeDrZ1NwrdDKQC9hx7UzrJdAtpxfXEE9452vAmbBWCfPF2"),
  new Monster(22, "シガーワーム", "562F06EC0342F601", MonsterRarity.Uncommon, "FeAHx25xnyUphk7b7qhpCFsQacfEsFCj3tCL2Yjui1CKuo"),
  new Monster(23, "キンボーくん", "0A38DBE379159BC9", MonsterRarity.Uncommon, "Fe2uUvkNr1B6hNM9X9xZkXT88QKCWgkso82zrvd7qXs7X2"),
  new Monster(24, "デンQブラザーズ", "71501E789B1D6E11", MonsterRarity.Uncommon, "FeJHuXcvYQxev3WEPA1TWP4wJVqPwnCR66rJtJDu7LDjmP"),
  new Monster(25, "ルミナッテリー", "570C11CC35340E53", MonsterRarity.Uncommon, "FeFEKckkf4GkmY9G71e1P5dx6NRstZfgXCFzuVbxDGX6Yu"),
  new Monster(26, "グリメラ", "4ABB240FB0046491", MonsterRarity.Uncommon, "Fe6C1XY7PDhkkqXXFBEi2Q9MnHYGFGWRTYJ5wJATMYS7ZF"),
  new Monster(27, "ドロスラ", "039006FD45680510", MonsterRarity.Uncommon, "FeEyVvS6mfezKUd5hLqTw4onrfB2MuQQkKBePdHZZJwSSc"),
  new Monster(28, "キャビティチック", "159328191AF51793", MonsterRarity.Uncommon, "Fe3X8JPBXmJCypUs32fDUmwKXUREAHz1j2fxxRnB6xJ3fW"),
  new Monster(29, "シャドウバット", "0DF466F84041B840", MonsterRarity.Uncommon, "FeCLgU33A3HUvmUzA3KPLhTDDWPi4nvX5GnJ1jvTb9vmhY"),
  new Monster(30, "モーニング・ファントム", "257E07B8416F4F0E", MonsterRarity.Uncommon, "FeBAzFjwTXZqS3FgMhsbP6Pa1uAPvpWVXXRjuyQxni8LqK"),
  new Monster(31, "ロックブー", "5779BF3551AE0C5B", MonsterRarity.Uncommon, "FeJPWMbbNZRNDW5shEqwQqXEp9YJVfQEmhnzy92v6YxhRv"),
]

export const RareMonsters: Monster[] = [
  new Monster(32, "スポンジー", "59BEEBCEE2F61F12", MonsterRarity.Rare, "Fe5DYJWNyWGMzKbSnAG7WD5n7dMvhMCDmDC8UW4wz7BUCb"),
  new Monster(33, "のっとりエビ", "7EC0D361D1D77047", MonsterRarity.Rare, "FeBr23dZuH7wiea2WMpo4mpcSsHMWxXvqKNDjihBuwJCny"),
  new Monster(34, "アクアテンタクル", "04EB69EE639DC57C", MonsterRarity.Rare, "FeGpQSURJVALReyUk2UR2RsNpU8t3PsCSWKwGLMhE7fugs"),
  new Monster(35, "マッチングマッチーズ", "3EADE75226898EBE", MonsterRarity.Rare, "FeBk2CJmUAkz5N3QVUzmhmCKXYnYyfDH3F6A5CL1S7xEpx"),
  new Monster(36, "ボルカニオン", "267BC01DCC14DF76", MonsterRarity.Rare, "Fe4pnikwxq5vVgBr6CfsCGaQBXhWcB8oMbiHYDzvigS7Mu"),
  new Monster(37, "ソラリス", "1D14DBB28F280CCB", MonsterRarity.Rare, "FeGgPoRszjku89zwCh6Lu4PqEVspPLP6jGDKsaATzueXVG"),
  new Monster(38, "グリーン・ガーディアン", "6E6F59A09FF72816", MonsterRarity.Rare, "FeCg7BMcnpzZ2YLmj4eRrzjrWdrVxJMStRG3ozgoj4iTgU"),
  new Monster(39, "フラワんこ", "65CBDD872A51A385", MonsterRarity.Rare, "Fe7wYoJJVqTFCEdwYkAuvjAao5zg2cPoDSc9SMF83nYjfG"),
  new Monster(40, "キャベジヘッド", "0EFF4FF8B33C3DC4", MonsterRarity.Rare, "FeGCu5CBN547HRQVU5u9Jgf6SPreUyn61gttLbmfz3rWf9"),
  new Monster(41, "ブルータング", "205949894D1C2328", MonsterRarity.Rare, "Fe9X4kXoW4qgcjcsZ5JhAqGcK6UpNVL2xQt6dqbU5uBKsu"),
  new Monster(42, "ヘビ乙女", "31A6EE4108EFFB08", MonsterRarity.Rare, "Fe7ER2qbGsK3FnBa2EPg3WvkNvwaZw4fmn6gnGt2W5M3YY"),
  new Monster(43, "ビークビースト", "0C78AF0365D1EFCC", MonsterRarity.Rare, "FeDa3qSRoASmsCkDkhwrp3kC9t54yW2Tuk89pvyXYRMMF6"),
  new Monster(44, "フェリンヒドラ", "6ED07A0BB1DF7D2A", MonsterRarity.Rare, "FeG3urtZHrJLPiDJpetDBsxoaQFsYhYCh38gnQuWrA4Ves"),
  new Monster(45, "アンジェリーナ", "1E9B49C660DD61C8", MonsterRarity.Rare, "FeJAMkpH1Ky5y5e7r75Mv5virGsuJBtaMzax6unRFSETpP"),
  new Monster(46, "ニンジャロット", "64C91CB4DE339342", MonsterRarity.Rare, "Fe3TzZm5j1U5UTpXPacR6wuhPMcMxPTBqVxeZCjJFxbFWa"),
  new Monster(47, "フェアリーフェイ", "4C69115A59029DFC", MonsterRarity.Rare, "Fe2cheiGPVNW2uXGdFZ4F8x5cnxCEhP1Q8AGcBQ76CFQH1"),
  new Monster(48, "ルミニコーン", "56490235BFA7DF10", MonsterRarity.Rare, "FeFChbG2NptLTRhwqv3sQcFXZoZqQZ8YJzieMCPGGm7kEm"),
  new Monster(49, "ジェムゲーター", "7159F0A821D667B3", MonsterRarity.Rare, "FeDfRzt4tzLvGEjHWFJowXqntS3gifnffCHcYzsEkd29zU"),
]

export const EpicMonsters: Monster[] = [
  new Monster(50, "アクアフロッグ", "7FB0A23B0296A688", MonsterRarity.Epic, "FeCTviLUYJnbiV1MFXRhdEHGZiCN8Nrbnm1aUNZonL55sY"),
  new Monster(51, "アクアリア", "3E5A58F4A23B67F5", MonsterRarity.Epic, "Fe7MNcNkukDW925E6BHh3LFbKMatBvFHZrTFhHGnRJ5SyV"),
  new Monster(52, "メタル・ワーム", "44110813060FF129", MonsterRarity.Epic, "FeCsT5EbJ1FC51npzRwzuwudfWETZBUarvJr9Rm1K1UTUo"),
  new Monster(53, "ルミナ", "205385838F5AE785", MonsterRarity.Epic, "FeHg3tPmyWdtNDiWXTxgVCJZwTwmPNfokTtz8ikKZQE3LM"),
  new Monster(54, "チェンソーワニ", "05D3AB145E56E5E6", MonsterRarity.Epic, "FeAZ6G7tny6dD11uFG24kRAkPxPqXrZUyZKkauvUrYVGok"),
  new Monster(55, "ツリーホーン", "0827E846C47CC57E", MonsterRarity.Epic, "FeC1Q6C1JoDBKDwK6oR3GDsYQKm1aZD6vKLLPW5r1FEuML"),
  new Monster(56, "フレイムバード", "725552DB566108D0", MonsterRarity.Epic, "Fe4sWq7eiZcuRS8dLhQvkQ3QeM6jJZjffAkZF3DqznQ61E"),
  new Monster(57, "インフェルニナ", "1CD18FCA178EEE2B", MonsterRarity.Epic, "Fe1yexKgsyS8HjxtamVkUrxX8aqPKpP13Q7ZSTCQqM9wfX"),
  new Monster(58, "バラモン・ナーガ", "6B8F1DD75ADBC3D6", MonsterRarity.Epic, "FeBPf3WJbzqB2gmy9dv7LyDKzGgSoLy7baCZyTezbz8JNm"),
  new Monster(59, "ストーンクラッシャー", "0D09808CE72CEC6A", MonsterRarity.Epic, "Fe4DPAndz9mqqdrTS7v67zoNke5VR9Ux2928TJMcDbAE76"),
  new Monster(60, "ワンアイド・メナス ", "3255700A42A3B8BA", MonsterRarity.Epic, "FeFZ2MiWSg3aZtbBNETU3ZZLZ5HvL2qxzLRHPPABDgyqDF"),
  new Monster(61, "ろくろのお小夜", "6F3F9D6D4892AA20", MonsterRarity.Epic, "Fe5ZA6yQsM82qMCRQ51oPeKLSMPAMJqRh7cq4Wz119dg5A"),
]

export const LegendaryMonsters: Monster[] = [
  new Monster(62, "天照ヒカリノマエ", "5D77F51619FF77E9", MonsterRarity.Legendary, "FeC6zRjcYc8rFjrWpLWqs98iAFnuU8bnDsWt9jnosC1CvL"),
  new Monster(63, "深淵竜マザーリヴァイア", "4FD0F58F5FFBBFA7", MonsterRarity.Legendary, "Fe3FPM8NiPbUabGUDZSnUBZGN9omirrdBe3LoxCXbmNQQc"),
  new Monster(64, "霊樹恐竜ドリアーゴン", "6E01CC408CE74AA7", MonsterRarity.Legendary, "FeJ4TC2NEPtZz7UrUd38weR2yoNKk4bcLtser4yYGLAzew"),
  new Monster(65, "炎帝竜鳥ドラゴニクス", "1CFCD58C3E337151", MonsterRarity.Legendary, "FeCipaiQHJ1uFUgGF24QpuEfrLxQnpndKb2WTNP93rC4ic"),
  new Monster(66, "地竜王ガイアドラゴン", "7254210F570A9846", MonsterRarity.Legendary, "Fe7QtCxc6pycdsAD1rDPDagFzhWy7VwH5XUNbvqAqiuN8S"),
  new Monster(67, "邪王那弥陀（ナミダ）", "0157925127B0A5C7", MonsterRarity.Legendary, "FeETRycjJG61tXrheBDaJXEoyZmZHmqAQP4Nvcy9Tr38CR"),
]
