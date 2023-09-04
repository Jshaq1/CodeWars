function duplicateCount(text) {
    const newStr = text.toLowerCase().split('').sort()
    const dupes = []
    for (i = 0; i < newStr.length; i++) {
        if (newStr[i] === newStr[i + 1] && !dupes.includes(newStr[i])) {
            dupes.push(newStr[i])
        }
    } return dupes.length
}