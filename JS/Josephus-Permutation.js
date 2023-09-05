function josephus(items, k) {
    var itemsArr = [...Array(items).keys()].map(x => x + 1)
    var index = 0
    while (itemsArr.length > 1) {
        console.log((index + k - 1) % itemsArr.length)
        index = (index + k - 1) % itemsArr.length;
        itemsArr.splice(index, 1);
    }
    return itemsArr[0];
}


// console.log(josephus(7, 3))
console.log(6 % 5)