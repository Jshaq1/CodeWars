export function solution(str: string, ending: string): boolean {
    const escapedEnding = ending.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    const pattern: RegExp = new RegExp(`${escapedEnding}$`);
    return pattern.test(str) || ending === '' ? true : false
    
  }