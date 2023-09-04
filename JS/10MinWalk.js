function isValidWalk(walk) {
    let counts = {}
    let roundTrip = true

    walk.forEach(direction => {
        counts[direction] = counts[direction] ? counts[direction] + 1 : 1
    })

    if (counts['n'] !== counts['s']) {
        roundTrip = false
    }
    if (counts['w'] !== counts['e']) {
        roundTrip = false
    }

    return walk.length === 10 && roundTrip ? true : false

}