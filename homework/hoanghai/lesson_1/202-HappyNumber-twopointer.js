/**
 * @param {number} n
 * @return {boolean}
 */
 let mnemonic = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
 var generateNewNumber = function (number) {
     let result = 0
     while(number > 0) {
         let x = number % 10
         result += mnemonic[x]
         number = (number - x) / 10
     }
     return result
 }
 var isHappy = function(n) {
     if (n === 1) {
         return true
     }
     let slowPointer = n
     let fastPointer = generateNewNumber(n)
     let sum = 0
     do {
         sum = generateNewNumber(n)
         slowPointer = generateNewNumber(slowPointer)
         fastPointer = generateNewNumber(fastPointer)
         fastPointer = generateNewNumber(fastPointer)
         if (sum === 1) return true
         n = sum
     } while(slowPointer !== fastPointer)
     return false
 };