function isValid(s: string): boolean {
  const stack: string[] = [];
  const parentheses = {
    '{': '}',
    '[': ']',
    '(': ')',
  } as const;
  const opens = Object.keys(parentheses);

  const isMatch = (x: string, y: string) => parentheses[x] === y;
  const isOpen = (c: string) => opens.includes(c);

  for (let c of s) {
    if (isOpen(c)) {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;

      const top = stack.pop()!;
      if (isMatch(top, c)) continue;
      return false;
    }
  }

  return stack.length === 0;
}
