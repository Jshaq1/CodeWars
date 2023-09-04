export function getSum(a: number, b: number): number {
    let high: number = Math.max(a, b)
    let low: number = Math.min(a, b)
    let answerArr: number[] = []
    
    for(let i = low; i <= high; i++){
      answerArr.push(i)
    }
    
    return answerArr.reduce((prev, curr) => prev + curr)
  }