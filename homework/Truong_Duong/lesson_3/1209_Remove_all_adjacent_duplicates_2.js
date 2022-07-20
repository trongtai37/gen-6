// Solution for https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function(s, k) {
    const stack = [];

    for (let c of s) {
        const size = stack.length;
        const top = size === 0 ? null : stack[size-1];
        stack.push(c);

        if(top === c) {
            let temp = size;
            while(temp >= 0 && stack[temp] === top) {
                temp -= 1;
            }
            const count = size - temp;
            if(count >= k) {
                for(let i = 0; i < count; i++) {
                    stack.pop()
                }
            }
        }
    }

    return stack.join('');
};

