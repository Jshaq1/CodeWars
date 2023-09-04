export function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter(e => !b.includes(e));
  }