export function solution(roman: string): number {
    const romans: {[index: string]:number} = {
      'I' : 1,
      'IV' : 4,
      'V' : 5,
      'IX' : 9,
      'X' : 10,
      'XL' : 40,
      'L': 50, 
      'XC': 90,
      'C' : 100,
      'CD': 400, 
      'D' : 500,
      'CM' : 900,
      'M' : 1000
    }
    
    for(const [key, value] of Object.entries(romans)){
      if(roman === key) return value
    }
    
    let result: number = 0
    roman.split('').forEach(x => result += romans[x])
  
  
    return result
  }