export function findMissingLetter(array:string[]):string{
    let alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if(/[A-Z]/.test(array[0])){
      const alphaUpper: string[] = alphabet.map(x => x.toUpperCase())
      const strtPoint: number = alphaUpper.indexOf(array[0])
      const endPoint: number = alphaUpper.indexOf(array[array.length -1])
      return alphaUpper.slice(strtPoint, endPoint).filter(x => !array.includes(x)).join('')
    }
    const strtPoint: number = alphabet.indexOf(array[0].toLowerCase())
    const endPoint: number = alphabet.indexOf(array[array.length -1].toLowerCase())
    return alphabet.slice(strtPoint, endPoint).filter(x => !array.includes(x)).join('')
    
  }