function getTop(stack: string[]) {
  if (!stack.length) return undefined;
  return stack[stack.length - 1];
}

function removeChars(input: string): string {
  const stack: string[] = [];

  for (const c of input) {
    const topStack = getTop(stack);
    if (!!stack.length && topStack && topStack === "a" && c === "c") {
      stack.pop();
    } else if (c !== "b") {
      stack.push(c);
    }
  }

  return stack.join("");
}
