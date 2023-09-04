export function playPass(s: string, n: number): string {
    return s
            .replace(/[a-z]/gi, match => {
              let charCode: number = match.charCodeAt(0)
              return String.fromCharCode((charCode + n <= 90) ? 
                                                 charCode + n : (charCode + n) % 90 + 64)
              })
            .replace(/\d+/gi, match => {
              let complement: string = '9'.repeat(match.length)
              return (Number(complement) - Number(match)).toString()
              })
            .split('')
            .map((x, idx) => idx % 2 === 0 ? x.toUpperCase() : x.toLowerCase())
            .reverse()
            .join('') 
  }