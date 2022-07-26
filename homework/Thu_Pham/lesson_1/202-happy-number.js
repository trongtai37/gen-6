//Solution for https://leetcode.com/problems/happy-number/

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let fastPointer = sumSquares(n)
    let slowPointer = n
    while (fastPointer !== 1 && fastPointer !== slowPointer) {
        //O(n) with n is the number of fast pointer's steps until it reach 1 or slow pointer
        fastPointer = sumSquares(sumSquares(fastPointer))
        slowPointer = sumSquares(slowPointer)
    }
    return fastPointer === 1
};

var sumSquares = function (n) {
    let sum = 0
    let digit
    while (n >= 1) { //O(n) with n is the length of the param
        digit = n % 10
        n = Math.floor(n / 10)
        sum += digit * digit
    }
    return sum
}

//runtime O(n^2)
//space O(1) extra space
