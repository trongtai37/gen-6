type StackType = {
  char: string;
  count: number;
};

function removeDuplicates(s: string, k: number): string {
  const stack: StackType[] = [];
  for (let i = 0; i < s.length; i++) {
    const topStack = stack[stack.length - 1];
    if (topStack?.char === s[i] && stack.length > 0) {
      topStack.count++;
      if (topStack.count === k) {
        stack.pop();
      }
    } else {
      stack.push({ char: s[i], count: 1 });
    }
  }

  return stack.map(({ char, count }) => char.repeat(count)).join("");
}
