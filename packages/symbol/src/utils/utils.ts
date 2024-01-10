import Mosaic from '../models/Mosaic';
import { NetworkType } from '../models/NetworkType';
import { TransactionType } from '../models/TransactionType';
import base32 from './base32';
import { hexToUint8 } from './converter';

export async function getDataFromApi(url: string) {
  const res = await fetch(url);
  return res.json();
}

function isStringArray(arr: any[]) {
  return Array.isArray(arr) && arr.every((element) => typeof element === 'string');
}

export function buildQueryString(obj: any): string {
  const queryString = Object.keys(obj)
    .map((key) => {
      const value = obj[key];

      if (value === undefined || value === null || value === '') {
        return '';
      }

      if (Array.isArray(value)) {
        if(isStringArray(value)){
          return value
          .map((item: any) => `${key}=${item}`)
          .join('&');
        } else {
          return value
          .map((item: any) =>
            Object.keys(item)
              .map(
                (itemKey) =>
                  `${key}[${itemKey}]=${item[itemKey]}`
              )
              .join('&')
          )
          .join('&');
        }      
      } else {
        return `${key}=${value}`;
      }
    })
    .filter((param) => param !== '') // 空のパラメータを除外
    .join('&');
  return queryString;
}

export function getNetworkType(number: number): NetworkType {
  const keys = Object.keys(NetworkType).filter((key) => isNaN(Number(key)));
  for (const key of keys) {
    if (NetworkType[key as keyof typeof NetworkType] === number) {
      return NetworkType[key as keyof typeof NetworkType];
    }
  }
  throw new Error('Invalid network type');
}

export function getTransactionType(number: number): TransactionType {
  const keys = Object.keys(TransactionType).filter((key) => isNaN(Number(key)));
  for (const key of keys) {
    if (TransactionType[key as keyof typeof TransactionType] === number) {
      return TransactionType[key as keyof typeof TransactionType];
    }
  }
  console.error('Invalid transaction type: ' + number);
  throw new Error('Invalid transaction type');
}

export function convertToMosaicArray(objArray: any[]): Mosaic[] {
  const mosaicArray: Mosaic[] = [];
  for (const obj of objArray) {
    const mosaic: Mosaic = {
      id: obj.id,
      amount: obj.amount,
    };
    mosaicArray.push(mosaic);
  }
  return mosaicArray;
}

export function hexToAddress(recipientAddress: string): string {
  return base32.encode(new Uint8Array([...hexToUint8(recipientAddress), 0])).slice(0, -1);
}

// jstで本日0:00のタイムスタンプを取得する関数
export const getTodaysJstTimestamp = (): number => {
  // SymbolのネメシスブロックのTimeStamp（MainNet）
  const epocTime = 1615853185 * 1000;
  // UTC時刻の現在のタイムスタンプを取得
  const currentUTCTimestamp = Date.now();
  // UTC時刻からDateオブジェクトを作成
  const utc = new Date(currentUTCTimestamp);
  utc.setUTCHours(0, 0, 0, 0);
  // UTC時刻での今日のタイムスタンプを取得
  const todayStartTimestamp = utc.getTime();
  // SymbolのTimeStampに調整する
  return todayStartTimestamp - epocTime - 1000 * 60 * 60 * 9;
}

export const getPreviousHoursUtcTimestamp = (hours: number): number =>  {
  // SymbolのネメシスブロックのTimeStamp（MainNet）
  const epocTime = 1615853185 * 1000;
  // UTC時刻の現在のタイムスタンプを取得
  const currentUTCTimestamp = Date.now();
  // UTC時刻からDateオブジェクトを作成
  const dateUTC = new Date(currentUTCTimestamp);
  // 1日引く（UTC時刻で操作）
  dateUTC.setUTCHours(dateUTC.getUTCHours() - hours);
  // UTC時刻での指定時間前のタイムスタンプを取得
  const previousDayUTCTimestamp = dateUTC.getTime();
  // SymbolのTimeStampに調整する
  return previousDayUTCTimestamp - epocTime;
}

export const filterXDayTransactions = (txs: any[], x: number): any[] => {
  return txs.filter((tx) => {
      return Number(tx.meta.timestamp) > x;
  });
}