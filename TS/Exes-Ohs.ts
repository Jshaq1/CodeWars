export function xo(str: string) : boolean {
    const o: number = str.toLowerCase().split('').filter(o => o === 'o').length
    const x: number = str.toLowerCase().split('').filter(x => x === 'x').length
    return x == o
   }