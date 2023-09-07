// 1. Find the Missing Number in an Unsorted Array
function findMissingNumber(arr) {
    return [...Array(arr.length + 1).keys()].map(x => x + 1).filter(x => !arr.includes(x))[0]
}
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Example test case

// 2. Rotate an Array
function rotateArray(arr, k) {
    const rotationIndex = k % arr.length
    return [...arr.slice(arr.length - rotationIndex), ...arr.slice(0, arr.length - rotationIndex)]
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Example test case

// 3. Implement a Queue Using Stacks
class QueueUsingStacks {
    constructor() {

    }

    push(val) {
        // Your code here
    }

    pop() {
        // Your code here
    }

    peek() {
        // Your code here
    }

    empty() {
        // Your code here
    }
}

// 4. Find the Longest Substring Without Repeating Characters
function longestSubstring(s) {
    const charObj = {}
    let start = 0
    let maxLength = 0

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end]
        if (charObj[currentChar] !== undefined && charObj[currentChar] >= start) {
            start = charObj[currentChar] + 1
        }

        charObj[currentChar] = end

        const currentLength = end - start + 1

        if (currentLength > maxLength) {
            maxLength = currentLength
        }
        console.log(start, maxLength)
    }
    return maxLength
}

console.log(longestSubstring("abcabcbb")); // Example test case

// 5. Reverse Words in a String
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords("Hello World")); // Example test case

// 6. Merge Intervals
function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals; // No need to merge if there are 0 or 1 intervals
    }

    // Sort the intervals based on their start values
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]]; // Initialize the merged intervals with the first interval
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];

        const lastMergedInterval = merged[merged.length - 1];


        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Overlapping intervals, merge them by updating the end value
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Non-overlapping interval, add it to the merged intervals
            merged.push(currentInterval);
        }
    }

    return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); // Output: [[1, 6], [8, 10], [15, 18]]

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // Example test case

// 7. Implement a Trie (Prefix Tree)
class Trie {
    constructor() {
        // Your code here
    }

    insert(word) {
        // Your code here
    }

    search(word) {
        // Your code here
    }

    startsWith(prefix) {
        // Your code here
    }
}

// 8. Valid Parentheses
function isValidParentheses(s) {
    // Your code here
}

console.log(isValidParentheses("()[]{}")); // Example test case
