var solution = function (firstArray, secondArray) {
    return firstArray
        .map((val, idx) => Math.max(val, secondArray[idx]) - Math.min(val, secondArray[idx]))
        .map(x => x * x)
        .reduce((curr, accu) => (curr + accu)) / firstArray.length
}