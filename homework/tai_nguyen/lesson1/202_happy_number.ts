function getNext(n: number) {
  let res = 0;

  while (n > 0) {
    res += ((n % 10) * (n % 10));
    n = Math.floor(n / 10);
  }

  return res;
}

function isHappy(n: number): boolean {
  let slowPointer = n, fastPointer = n;
  while (true) {
    slowPointer = getNext(slowPointer);
    fastPointer = getNext(getNext(fastPointer));

    if (slowPointer === 1) return true;
    if (fastPointer === slowPointer) return false;
  }
};