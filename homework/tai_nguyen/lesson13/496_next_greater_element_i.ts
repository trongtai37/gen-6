function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const stack: number[] = [];
  const nextGreater: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    map.set(nums2[i], i);
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }

    if (stack.length) {
      nextGreater[i] = stack[stack.length - 1];
    } else {
      nextGreater[i] = -1;
    }

    stack.push(nums2[i]);
  }

  return nums1.map((num) => nextGreater[map.get(num)!]);
}
