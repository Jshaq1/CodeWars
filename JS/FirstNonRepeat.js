function firstNonRepeatingLetter(s) {
    if (s === '') return ''
    let arr = s.toLowerCase().split('')
    let dupes = arr.filter((item, index) => arr.indexOf(item) != index)
    let filteredArr = arr.filter((item, index) => { return arr.indexOf(item) == index })
    let finalFilteredArr = filteredArr.filter(item => !dupes.includes(item) ? item : undefined)
    return finalFilteredArr.length > 0 ? s[arr.indexOf(finalFilteredArr[0])] : ''


}