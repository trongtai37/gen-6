/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let index = 0;
    let caculation = 0;
    let stack = []
    let length = s.length;
    while (index < length) {
        if (s[index] === ')' || s[index] === '}' || s[index] === ']') {
            caculation -= 1;
            if (caculation < 0) return false;
        }
        if (s[index] === ')'){
            let top = stack.pop();
            while (top !== '('){
                top = stack.pop();
                if(stack.length === 0) {
                    return false;
                }
            }
        }
        else if (s[index] === ']') {
            let top = stack.pop();
            while (top !== '['){
                top = stack.pop();
                if(stack.length === 0) {
                    return false;
                }
            }
        }
        else if (s[index] === '}') {
            let top = stack.pop();
            while (top !== '{'){
                top = stack.pop();
                if(stack.length === 0) {
                    return false;
                }
            } 
        }
        else {
            caculation += 1;
            stack.push(s[index]);
        }
        index++;
    }
    if (stack.length === 0) {
        return true
    }
    return false;
};