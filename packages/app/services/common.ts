export function getEnumKeyByEnumValue(enumType: any, enumValue: any): string | undefined {
  const keys = Object.keys(enumType).filter((key) => enumType[key] === enumValue);
  return keys.length > 0 ? keys[0] : undefined;
}

export async function getActiveNode(): Promise<string> {
  const nodes: string[] = JSON.parse(process.env.NEXT_PUBLIC_SYMBOL_NODE!) || [];
  for (const i in nodes) {
    try {
      // validate
      let n = nodes[i];
      if (!n) continue;

      // init
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 1500);

      const node = new URL(n);
      node.pathname = '/node/health';

      const res = await fetch(node.href, { signal: controller.signal });
      if (res.status === 200) {
        return nodes[i] as string;
      }
    } catch {}
  }
  throw new Error('No active node');
}
