/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    // Array.includes() has a time complexity o(n)
    // Set.has() has a time complexity o(1)
    // apply set to prevent endless loop, and brute force solution to solve
    if (n === 1) {
        return true
    }
    let mnemonic = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
    let preventEndlessLoop = new Set([0])
    let sum = 0
    while(!preventEndlessLoop.has(n)) {
        preventEndlessLoop.add(n)
        sum = 0
        while(n > 0) {
            let x = n % 10
            sum += mnemonic[x]
            n = (n - x) / 10
        }
        if (sum === 1) return true
        n = sum
    }
    return false

};