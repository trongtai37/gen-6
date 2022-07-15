//Solution for https://leetcode.com/problems/happy-number/

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let fastPointer = sumSquares(n)
    let slowPointer = n
    while (fastPointer !== 1 && fastPointer !== slowPointer) {
        fastPointer = sumSquares(sumSquares(fastPointer))
        slowPointer = sumSquares(slowPointer)
    }
    return fastPointer === 1
};

var sumSquares = function (n) {
    let sum = 0
    let digit
    while (n >= 1) {
        digit = n % 10
        n = Math.floor(n / 10)
        sum += digit * digit
    }
    return sum
}