function isValid(s: string): boolean {
  const stack: string[] = [];
  const obj: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(obj[s[i]]);
    } else {
      if (!stack.length) return false;
      if (stack[stack.length - 1] !== s[i]) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
