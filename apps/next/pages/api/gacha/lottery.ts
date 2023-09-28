import type { NextApiRequest, NextApiResponse } from 'next/types';
import { 
    TransactionService, 
    MonsterRarity, 
    Monster, 
    MonsterService, 
    CommonMonsters, 
    UncommonMonsters, 
    RareMonsters, 
    EpicMonsters, 
    LegendaryMonsters, 
    filterXDayTransactions,
    getPreviousDayUtcTimestamp,
} from 'symbol'
import symbolSdk from 'symbol-sdk';

// txの内容によって当選するモンスターを返す関数
function chooseMonster(tx: any): Monster | undefined{
    const monsterService = new MonsterService(CommonMonsters, UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters);
    const message = tx.transaction.message;
    let mosaicId1: string | undefined = undefined;
    let mosaicId2: string | undefined = undefined;
    if(tx && tx.transaction && tx.transaction.mosaics) {
        if(tx.transaction.mosaics[0] && tx.transaction.mosaics[0].id){
            if(tx.transaction.mosaics[0].amount == 2) {
                mosaicId1 = tx.transaction.mosaics[0].id;
                mosaicId2 = tx.transaction.mosaics[0].id;
            } else {
                mosaicId1 = tx.transaction.mosaics[0].id;
            }
            if(tx.transaction.mosaics[1] && tx.transaction.mosaics[1].id) {
                mosaicId2 = tx.transaction.mosaics[1].id;
            }
        }
    }
    let rarity1: MonsterRarity | undefined = undefined;
    let rarity2: MonsterRarity | undefined = undefined;
    if(mosaicId1 != undefined){
        rarity1 = monsterService.getMonsterRarity(mosaicId1);
    }
    if(mosaicId2 != undefined){
        rarity2 = monsterService.getMonsterRarity(mosaicId2);
    }
    // ２つモザイクがある場合
    if(rarity1 != undefined && rarity2 != undefined){
        const r = monsterService.compareRarities(rarity1, rarity2);
        // レアリティが同じ場合
        if(r == undefined) {
            // メッセージのアリナシで確率が変わる
            const rand = message == undefined 
                ? monsterService.getRandomOutcome([0.3, 0.4, 0.3]) 
                : monsterService.getRandomOutcome([0.2, 0.4, 0.4]);
            console.log("same rarity")
            console.log(rand)
            switch(rand){
                case 0:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(monsterService.getLowerRarity(rarity1)));
                case 1:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(rarity1));
                case 2:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(monsterService.getHigherRarity(rarity1)));
            }
            return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(rarity1));
        // レアリティが異なる場合
        } else {
            // メッセージのアリナシで確率が変わる
            const rand = message == undefined 
                ? monsterService.getRandomOutcome([0.2, 0.3, 0.3, 0.2]) 
                : monsterService.getRandomOutcome([0.1, 0.3, 0.3, 0.3]);
            console.log("different rarity")
            console.log(rand)
            switch(rand){
                case 0:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(monsterService.getLowerRarity(r.lowRarity)));
                case 1:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(r.lowRarity));
                case 2:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(r.highRarity));
                case 3:
                    return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(monsterService.getHigherRarity(r.highRarity)));
            }
        }
    // １つモザイクがある場合
    } else if(rarity1 != undefined || rarity2 != undefined) {
        const rand = message == undefined 
            ? monsterService.getRandomOutcome([0.5]) 
            : monsterService.getRandomOutcome([0.6]);
        if(rarity1 != undefined) {
            if(rand != undefined){
                return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(rarity1));
            } else {
                return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(monsterService.getLowerRarity(rarity1)));
            }
        }
        if(rarity2 != undefined) {
            if(rand == undefined){
                return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(rarity2));
            } else {
                return monsterService.chooseMonsterFromList(monsterService.getMonsterListFromRarity(monsterService.getLowerRarity(rarity2)));
            }
        }
    }
    // モザイクが無い場合
    else if(rarity1 == undefined && rarity2 == undefined) {
        // メッセージが空の場合
        if(message == undefined){
            // 50%の確率でCommon1を返す
            if(monsterService.getRandomOutcome([0.5]) !== undefined) {
                return monsterService.chooseMonsterFromList(CommonMonsters);
            } else {
                return undefined;
            }
        // メッセージが空でない場合
        } else {
            return monsterService.chooseMonsterFromList(CommonMonsters);
        }
    }
    throw new Error('something wrong');
}

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
    let { hash, node } = req.body;
    if(hash == undefined || Array.isArray(hash)) throw new Error('hash is undefined or string[]');
    if(node == undefined || Array.isArray(node)) throw new Error('node is undefined or string[]');
    const tx = await TransactionService.getConfirmedTransaction(node, hash)
    const result = await sendSelectedMosaic(tx, node);
    res.status(200).json({result});
}

const Order = {
    Asc: 'asc',
    Desc: 'desc'
} as const;


async function sendSelectedMosaic(tx: any, node: string): Promise<{ payload: string, monsterName?: string, mosaicId?: string, rarity?: string } | { error: string }>{
    // ガチャの一日の制限回数
    const limit = 5;

    if(tx.transaction.type != 16724) throw new Error('transaction type is not transfer transaction');
    let monster = undefined
    try  {
        monster = chooseMonster(tx);
    } catch (error: any) {
        return ({ error: `unfortunately, you can not get a new monster: ${error.message}` });
    }

    const previous2DayUtcTimestamp = getPreviousDayUtcTimestamp(2);
    const previous1DayUtcTimestamp = getPreviousDayUtcTimestamp(1);

    const { network, signerPublicKey } = tx.transaction;
    const { hash, timestamp } = tx.meta;

    if(Number(timestamp) < previous2DayUtcTimestamp) return ({ error: `You will not get a monster in this hash because the deadline(2days) has passed: ${hash}` });

    const facade = network == 152 ? new symbolSdk.facade.SymbolFacade('testnet') : new symbolSdk.facade.SymbolFacade('mainnet');
    const address = facade.network.publicKeyToAddress(new symbolSdk.PublicKey(symbolSdk.utils.hexToUint8(signerPublicKey))).toString();

    const keyPair = new symbolSdk.symbol.KeyPair(new symbolSdk.PrivateKey(process.env.SYSTEM_PRIVATE_KEY));
    const publicKey = symbolSdk.utils.uint8ToHex(keyPair.publicKey.bytes);
    let txs: any = [];

    // 承認済みトランザクションを抽出
    const t = await TransactionService.searchConfirmedTransactions(node, {
        type: [16724],
        recipientAddress: address,
        signerPublicKey: publicKey,
        pageSize: 30,
        order: Order.Desc,
    })
    txs = txs.concat(t.data);

    // 未承認トランザクションを抽出
    const unconfirmedTransactions = await TransactionService.searchUnconfirmedTransactions(node, {
        type: [16724],
        recipientAddress: address,
        signerPublicKey: publicKey,
        pageSize: 100,
    })
    txs = txs.concat(unconfirmedTransactions.data);
    txs = filterXDayTransactions(txs, previous1DayUtcTimestamp);

    if(txs.length >= limit) return ({ error: `You have already exceeded the daily gacha limit of ${limit} times.` });

    // トランザクション内でHashを使用していないか確認
    for (const tx of txs) {
        if(tx.transaction.message != undefined && tx.transaction.message == hash){
            return ({ error: `you have already got xym mon with this hash: ${tx.transaction.message}` });
        }
    }

    const mosaics = monster == undefined ? [] : [{
        mosaicId: BigInt("0x" + monster.mosaicId),
        amount: BigInt(1)
    }];
    // 返信トランザクション
    const transaction = facade.transactionFactory.create({
        signerPublicKey: publicKey,
        type: 'transfer_transaction_v1',
        deadline: new symbolSdk.symbol.NetworkTimestamp(facade.network.fromDatetime(Date.now())).addHours(2).timestamp,
        recipientAddress: address,
        message: symbolSdk.utils.hexToUint8(hash),
        mosaics
    });

    transaction.fee = new symbolSdk.symbol.Amount(BigInt(transaction.size * 100));
    const signature = facade.signTransaction(keyPair, transaction);
    transaction.signature = new symbolSdk.symbol.Signature(signature.bytes);
    const transactionBuffer = transaction.serialize();
	const hexPayload = symbolSdk.utils.uint8ToHex(transactionBuffer);
    
    return { payload: hexPayload, "monsterName": monster?.name, "mosaicId": monster?.mosaicId, "rarity": monster?.getMonsterRarityAsString() };
}
