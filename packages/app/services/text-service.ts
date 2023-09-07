export namespace TextService {
  export function numericInputSuppor(e: string): number | null {
    if (e.split('').some((c) => isNaN(Number(c)))) {
      return null;
    }
    return Number(e.replace(/^0+/, ''));
  }
}
