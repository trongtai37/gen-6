//Solution for https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const checkStack = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s.charAt(i);
    const peekLetter = checkStack[checkStack.length - 1];
    if ("{[(".includes(letter)) checkStack.push(letter);
    else if (
      (letter === ")" && peekLetter === "(") ||
      (letter === "]" && peekLetter === "[") ||
      (letter === "}" && peekLetter === "{")
    )
      checkStack.pop();
    else return false;
  }
  return checkStack.length === 0;
};

//runtime O(n) with n is the length of the string
//space worst case O(n) if all characters are open brackets
//space best case O(1) extra space if the string is valid
