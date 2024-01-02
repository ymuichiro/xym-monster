import type { NextApiRequest, NextApiResponse } from 'next/types';
import fetch from 'node-fetch';
import { TransactionApi } from 'symbol';

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
  try {
    console.log("start")
    const node = "https://hideyoshi.mydns.jp:3001";
    const signerPublicKey = "2C2FEE9B16428A0F1064D19D2A268A6DFCEAE23E3EF937083D23DCCC76B23339";
    const recipientAddress = "NCJ6WRQDMU6ZEMBGLCCO3HJWC7HX6BT34PR5VHY";

    let { fromTimestamp, toTimestamp } = req.query;
    const epoc = 1615853185;
    const f = (Number(fromTimestamp) - epoc) * 1000;
    const t = (Number(toTimestamp) - epoc) * 1000;
    const ascBlocks = await fetch(`${node}/blocks?fromTimestamp=${f}&toTimestamp=${t}`);
    const descBlocks = await fetch(`${node}/blocks?fromTimestamp=${f}&toTimestamp=${t}&order=desc`);
    const firstHeight = ((await ascBlocks.json()) as { data: { block: { height: string } }[] }).data[0].block.height;
    const lastHeight = ((await descBlocks.json()) as { data: { block: { height: string } }[] }).data[0].block.height;

    let counter = 1;
    let sendTxs: TransactionApi[] = [];
    let recieveTxs: TransactionApi[] = [];

    while(true) {
      const txs = await fetch(`${node}/transactions/confirmed?fromHeight=${firstHeight}&toHeight=${lastHeight}&signerPublicKey=${signerPublicKey}&pageSize=100&pageNumber=${counter}`);
      const txsJson: any = await txs.json();
      if(txsJson.data.length === 0) break;
      counter++;
      sendTxs = sendTxs.concat(txsJson.data);
    }

    counter = 1;
    while(true) {
      const txs = await fetch(`${node}/transactions/confirmed?fromHeight=${firstHeight}&toHeight=${lastHeight}&recipientAddress=${recipientAddress}&pageSize=100&pageNumber=${counter}`);
      const txsJson: any = await txs.json();
      if(txsJson.data.length === 0) break;
      counter++;
      recieveTxs = recieveTxs.concat(txsJson.data);
    }
    res.status(200).json({ sendTxs, recieveTxs});
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}