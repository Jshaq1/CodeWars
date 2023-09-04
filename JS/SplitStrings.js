function solution(str) {
    const arr = []
    if (str.length % 2 !== 0) {
        const newstr = str.concat('', '_')
        for (i = 0; i < str.length; i += 2) {
            arr.push(newstr.slice(i, (i + 2)))
        } return arr
    }
    else {
        for (i = 0; i < str.length; i += 2) {
            arr.push(str.slice(i, (i + 2)))

        } return arr
    }
}