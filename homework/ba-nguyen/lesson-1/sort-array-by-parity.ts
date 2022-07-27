function sortArrayByParity(numbs: number[]): number[] {
  let left = 0;
  let right = numbs.length - 1;

  do {
    if (numbs[left] % 2 > numbs[right] % 2) {
      let temp = numbs[left];
      numbs[left] = numbs[right];
      numbs[right] = temp;
    }

    if (numbs[left] % 2 === 0) left++;
    if (numbs[right] % 2 === 1) right--;
  } while (left < right);
  return numbs;
}
