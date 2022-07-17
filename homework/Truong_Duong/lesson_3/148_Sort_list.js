// Solution for https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
  const stack = [];

  const map = {'(':')', '{': '}', '[': ']'};

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if(c in map) {
      stack.push(map[c]);
    } else {
      if(c !== stack.pop()) return false;
    }
  }

  return !stack.length;
};