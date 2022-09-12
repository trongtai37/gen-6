function longestMountain(arr: number[]): number {
  if (arr.length < 3) {
    return 0;
  }

  let res = 0;
  let fast = 0,
    slow = 0;
  while (fast < arr.length - 1) {
    let isUp = false,
      isDown = false;

    while (arr[fast] === arr[fast + 1]) {
      slow = fast = fast + 1;
      continue;
    }

    while (arr[fast] < arr[fast + 1]) {
      fast++;
      isUp = true;
    }

    while (arr[fast] > arr[fast + 1]) {
      fast++;
      isDown = true;
    }

    if (isUp && isDown) {
      res = Math.max(res, fast - slow + 1);
    }

    slow = fast;
  }

  return res;
}

// console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
// console.log(longestMountain([2, 2, 2]));
console.log(longestMountain([40, 51, 29, 19, 50, 25]));
