function isPangram(string) {
    const alphabet = ('abcdefghijklmnopqrstuvwyxz')
    let count = 0

    alphabet.split('').forEach(x => string.toLowerCase().includes(x) ? count++ : count)
    if (count === 26) {
        return true
    } return false
}