export function solution(number: number): string {
    const numeralsObj = {
      'M': 1000, 
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1
    }
    
    let result: string = ''
    
    for(let [key, value] of Object.entries(numeralsObj)){
      while(number >= value){
        number -= value;
        result += key;
      }
    }
    
    return result
    
  }