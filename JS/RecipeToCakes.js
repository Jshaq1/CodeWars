function cakes(recipe, available) {
    let ingreds = []

    for (const ingredient in recipe) {
        if (available[ingredient] === undefined) {
            return 0
        }
        ingreds.push(available[ingredient] / recipe[ingredient])
    }
    return Math.floor(Math.min(...ingreds))
}