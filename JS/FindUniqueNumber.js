function findUniq(arr) {
    let obj = {}
    arr.forEach(number => obj[number] ? obj[number] += 1 : obj[number] = 1)
    for (item in obj) {
        if (obj[item] === 1) return Number(item)
    }
}