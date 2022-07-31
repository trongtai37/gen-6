interface StackElement {
  value: string;
  count: number;
}

function getTop<T>(stack: T[]) {
  if (stack.length) {
    return stack[stack.length - 1];
  }

  return undefined;
}

function removeDuplicates(s: string, k: number): string {
  const stack: StackElement[] = [];

  for (let c of s) {
    const topElement = getTop(stack);
    if (!topElement) {
      stack.push({ value: c, count: 1 });
      continue;
    }

    if (topElement.value === c) {
      topElement.count++;
      if (topElement.count === k) {
        stack.pop();
      }
    } else {
      stack.push({ value: c, count: 1 });
    }
  }

  return stack.map((item) => item.value.repeat(item.count)).join('');
}
