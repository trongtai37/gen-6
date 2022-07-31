//Solution for https://leetcode.com/problems/happy-number/

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let fastPointer = sumSquares(n)
    let slowPointer = n
    while (fastPointer !== 1 && fastPointer !== slowPointer) {
        //max loops it can reach is 1000
        fastPointer = sumSquares(sumSquares(fastPointer))
        slowPointer = sumSquares(slowPointer)
    }
    return fastPointer === 1
};

var sumSquares = function (n) {
    let sum = 0
    let digit
    while (n >= 1) { //O(log10(n))
        digit = n % 10
        n = Math.floor(n / 10)
        sum += digit * digit
    }
    return sum
}

//runtime O(1000 * log10(n))
//space O(1) extra space
