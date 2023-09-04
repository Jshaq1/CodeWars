function findOutlier(integers) {
    const odds = integers.filter(x => x % 2 !== 0)
    const evens = integers.filter(x => x % 2 === 0)
    if (odds.length < evens.length) {
        return odds[0]
    } return evens[0]
}