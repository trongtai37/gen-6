//Solution for https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let res = 0;
    while (n) {
        res++ //count 1 1-bit
        n &= (n - 1) //turn off the rightmost bit
    } // until n equals 0
    return res
};

//runtime O(n) with n is the length of the input number in binary format
//space O(1) extra space
