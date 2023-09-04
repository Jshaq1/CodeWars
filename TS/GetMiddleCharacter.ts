export function getMiddle(s:string) {
    let sArr: string[] = s.split('')
    
    if(sArr.length % 2 === 0){
      return sArr[(sArr.length / 2 ) -1] + sArr[Math.ceil(sArr.length / 2)]
    }
    
   return sArr[Math.floor(sArr.length / 2)]
    
  }