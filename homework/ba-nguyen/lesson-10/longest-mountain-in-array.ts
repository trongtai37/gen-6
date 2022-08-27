function longestMountain(arr: number[]): number {
  let res = 0;
  let slow = 0;
  let fast = 0;
  const n = arr.length;

  while (slow < n) {
    while (fast + 1 < n && arr[fast] < arr[fast + 1]) fast++;
    let k = fast;
    while (k + 1 < n && arr[k] > arr[k + 1]) k++;

    if (slow !== fast && fast !== k) {
      res = Math.max(res, k - slow + 1);
    }
    slow = Math.max(k, slow + 1);
    fast = slow;
  }

  return res;
}
