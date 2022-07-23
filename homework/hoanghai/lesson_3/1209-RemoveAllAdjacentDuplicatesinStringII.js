/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    let stack = []
    let stackCount = []
    if (s.length < k) {
        return s
    }
    for (chucai of s) {
        if(stack.length === 0 || stack[stack.length-1] !== chucai) {
            stack.push(chucai)
            stackCount.push(1)
            continue
        }
        stack.push(chucai)
        stackCount[stackCount.length-1] += 1
        
        if (stackCount[stackCount.length-1] === k) {
            for (let i = 0; i < k; i++) {
                stack.pop()
            }
            stackCount.pop()
        }
    }
    let result = ""
    for (chucai of stack) {
        result += chucai
    }
    return result
};