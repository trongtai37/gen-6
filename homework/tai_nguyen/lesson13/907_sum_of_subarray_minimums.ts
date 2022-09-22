const MOD_BASE = 1e9 + 7;

function sumSubarrayMins(arr: number[]): number {
  let stack: number[] = [];
  const left: number[] = [],
    right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
    stack.push(i);
  }

  stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    right[i] = stack.length ? stack[stack.length - 1] - i : arr.length - i;
    stack.push(i);
  }

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += (arr[i] * left[i] * right[i]) % MOD_BASE;
  }

  return res % MOD_BASE;
}
