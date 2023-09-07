import type { NextApiRequest, NextApiResponse } from 'next/types';
import { charMapping } from 'symbol'
import symbolSdk from 'symbol-sdk';

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            return await getHandle(req, res);
    }
        return res.status(405).end();
    } catch (err) {
        console.error(err);
        return res.status(500).end();
    }
}
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
    let { recipientAddress, 'mosaics[id]': mosaicIds, 'mosaics[amount]': mosaicAmounts, feeMultiplier, message, networkType, deadline, isEncrypt } = req.query;
    const _feeMultiplier = feeMultiplier == undefined ? 100 : Number(feeMultiplier);
    const facade = new symbolSdk.facade.SymbolFacade(networkType == "0" ? "mainnet" : "testnet");
    deadline = deadline == undefined ? new symbolSdk.symbol.NetworkTimestamp(facade.network.fromDatetime(Date.now())).addHours(2).timestamp
        : new symbolSdk.symbol.NetworkTimestamp(deadline).timestamp;
    let mosaics = [];
    if(mosaicIds !== undefined) {
        if(Array.isArray(mosaicIds)) {
            for (let i = 0; i < mosaicIds.length; i++) {
                const mosaicId = convertToHexFromNameSpace(mosaicIds[i]);
                const amount = mosaicAmounts![i];
                mosaics.push({ 
                    mosaicId: BigInt("0x" + mosaicId), 
                    amount: BigInt(amount) }
                );
            }
        } else {
            mosaicIds = convertToHexFromNameSpace(mosaicIds)
            mosaics.push({ 
                mosaicId: BigInt("0x" + mosaicIds), 
                amount: BigInt(Number(mosaicAmounts))}
            );
        }
    }
    let messageArray: number[] = [];
    if(typeof message === 'string'){
        if(isEncrypt == "true") {
            messageArray = [1,...(new TextEncoder()).encode(message)];
        } else {
            messageArray = [0,...(new TextEncoder()).encode(message)];
        }
    }

    const transaction = facade.transactionFactory.create({
        type: 'transfer_transaction_v1',
        deadline,
        message: messageArray,
        recipientAddress,
        mosaics
    });
    transaction.fee = new symbolSdk.symbol.Amount(BigInt(transaction.size * _feeMultiplier));
    res.status(200).json({ payload: symbolSdk.utils.uint8ToHex(transaction.serialize())});
}
function convertToHexFromNameSpace(mosaicId: string): string{
    if(isHexString(mosaicId)){
        return mosaicId;
    } else {
        const nameSpaceArray = mosaicId.split(".");
        switch(nameSpaceArray.length){
            case 1:
                return symbolSdk.symbol.generateNamespaceId(nameSpaceArray[0]).toString("16");
            case 2:
                const parentId = symbolSdk.symbol.generateNamespaceId(nameSpaceArray[0]);
                const id = symbolSdk.symbol.generateNamespaceId(nameSpaceArray[1], parentId).toString("16");
                return symbolSdk.symbol.generateNamespaceId(nameSpaceArray[1], parentId).toString("16");
            case 3:
                const grandParentId = symbolSdk.symbol.generateNamespaceId(nameSpaceArray[0]);
                const _parentId = symbolSdk.symbol.generateNamespaceId(nameSpaceArray[1], grandParentId);
                return symbolSdk.symbol.generateNamespaceId(nameSpaceArray[2], _parentId).toString("16");
            default:
                throw new Error("invalid namespace");
        }
    }
}

function isHexString(input: string){
	if (0 !== input.length % 2)
		return false;

	for (let i = 0; i < input.length; i += 2) {
		if (undefined === tryParseByte(input[i], input[i + 1]))
			return false;
	}

	return true;
};
function tryParseByte(char1: string, char2: string) {
	const nibble1 = CHAR_TO_NIBBLE_MAP[char1];
	const nibble2 = CHAR_TO_NIBBLE_MAP[char2];
	return undefined === nibble1 || undefined === nibble2
		? undefined
		: (nibble1 << 4) | nibble2;
};
const CHAR_TO_NIBBLE_MAP = (() => {
	const builder = charMapping.createBuilder();
	builder.addRange('0', '9', 0);
	builder.addRange('a', 'f', 10);
	builder.addRange('A', 'F', 10);
	return builder.map;
})();

const CHAR_TO_DIGIT_MAP = (() => {
	const builder = charMapping.createBuilder();
	builder.addRange('0', '9', 0);
	return builder.map;
})();
