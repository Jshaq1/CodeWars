function generateHashtag(str) {
    let arr = str.split(' ').filter(item => item == '' ? null : item)
    let finalArr = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
    return arr.length < 1 || finalArr.length >= 140 ? false : `#${finalArr}`

}