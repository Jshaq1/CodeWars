export function accum(s: string): string {
    const strArr: string[] = s.toLowerCase().split('')
    let result: string[] = strArr.map((letter, index) => letter.repeat(index+1)).map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
    return result.join('-')
  }