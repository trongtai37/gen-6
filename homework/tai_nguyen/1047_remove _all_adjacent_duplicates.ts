function getTop<T>(stack: T[]) {
  if (stack.length) {
    return stack[stack.length - 1];
  }
  return undefined;
}

function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length) {
      const top = getTop(stack)!;
      if (top === s.charAt(i)) {
        stack.pop();
        continue;
      }
    }

    stack.push(s.charAt(i));
  }

  return stack.join('');
}
