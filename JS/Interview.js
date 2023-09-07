//1 Reverse a string 

const reverse = (str) => {
    return str.split('').reverse().join('')
}

console.log(reverse('I am an idiot'))

//2 palindrome 
const palindrome = (str) => {
    let newStr = str.replace(/[^a-zA-Z]/, '').toLowerCase()
    return newStr.split('').reverse().join('') === newStr
}

// console.log(palindrome('leveL'))


//3 FizzBuzz
const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(i + 'FizzBuzz')
        if (i % 5 === 0) console.log(i + 'Fizz')
        if (i % 3 === 0) console.log(i + 'Buzz')
        console.log(i)
    }

}

console.log(fizzBuzz(15))


//4 Missing number 
const findMissing = (n) => {
    for (let i = 0; i < n.length - 1; i++) {
        if (n[i + 1] !== n[i] + 1) {
            return (n[i] + 1)
        }
    } return 'there are no missing integers'
}

console.log(findMissing([1, 2, 3, 5, 6, 7]))


//5 Two sums 
const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) return [arr[i], arr[j]]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 17))

const twoSum2 = (arr, target) => {
    const numMap = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (numMap[complement] !== undefined) {
            return [complement, arr[i]];
        }
        numMap[arr[i]] = i;
    }

    return [];
}

console.log(twoSum2([2, 7, 11, 15], 22));








//6 LongestWord
const longWord = (str) => {
    return str.split(' ').sort((a, b) => b.length - a.length)[0]
}


console.log(longWord('I you are a silly idiot'))


//7 Count characters in string
const countChars = (str) => {
    const count = {}
    str.toLowerCase().split('').forEach(char => count[char] ? count[char] += 1 : count[char] = 1)
    return count
}

console.log(countChars('Iiiiii think you are a silly idiot'))


//8 Fibonacci Sequence 
function fibbo(n) {
    if (n <= 0) {
        return 'Invalid input. Please provide a positive integer.';
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibbo(n - 1) + fibbo(n - 2);
    }
}


console.log(fibbo(8))


//9 Merge two sorted 
const merge = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

console.log(merge([1, 2, 3, 4], [9, 10, 23, 12, 13]))



//10 Validate a password
const validatePass = (pass) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass)

}

console.log(validatePass('Giverny99'))
console.log(validatePass('megan'))


