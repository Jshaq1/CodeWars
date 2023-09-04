function alphabetPosition(text) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    return text
        .toLowerCase()
        .split('')
        .filter(letter => alpha.indexOf(letter) !== -1)
        .map(letter => {
            return (alpha.indexOf(letter) + 1)
        }).join(' ')

}