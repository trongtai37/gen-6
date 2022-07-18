// function partition(
//   array: number[],
//   compare: (item: number, pivot: number) => boolean,
//   left: number = 0,
//   right: number = array.length - 1
// ) {
//   const pivot = array[right];
//   let k = left;

//   for (let i = left; i < right; i++) {
//     if (compare(array[i], pivot)) {
//       [array[k], array[i]] = [array[i], array[k]];
//       k++;
//     }
//   }
//   [array[k], array[right]] = [array[right], array[k]];

//   return k;
// }

// function quickSelect(
//   array: number[],
//   k: number,
//   compare: (item: number, pivot: number) => boolean,
//   left: number = 0,
//   right: number = array.length - 1
// ): number {
//   if (k < 0 || k >= array.length || left > right) return -1;

//   const pivotIndex = partition(array, compare, left, right);

//   if (pivotIndex === k) {
//     return k;
//   }

//   if (pivotIndex < k) {
//     return quickSelect(array, k, compare, pivotIndex + 1, right);
//   }

//   return quickSelect(array, k, compare, left, pivotIndex - 1);
// }

// function getStrongest(arr: number[], k: number): number[] {
//   const medianIndex = Math.floor((arr.length - 1) / 2);
//   quickSelect(arr, medianIndex, (item, pivot) => item < pivot);
//   const median = arr[medianIndex];
//   return [median];

//   // quickSelect(arr, arr.length - k - 1, (item, pivot) => {
//   //   const strongItem = Math.abs(item - median);
//   //   const strongPivot = Math.abs(pivot - median);

//   //   if (strongItem === strongPivot) return item < pivot;

//   //   return strongItem < strongPivot;
//   // });

//   // return arr.slice(-k);
// }

function basicCompare(a: number, b: number): number {
  if (a === b) return 0;
  if (a > b) return 1;
  return -1;
}

function strongCompare(a: number, b: number, median: number) {
  const strongA = Math.abs(a - median);
  const strongB = Math.abs(b - median);

  if (strongA === strongB) {
    return basicCompare(a, b);
  }

  return basicCompare(strongA, strongB);
}

function getStrongest(arr: number[], k: number): number[] {
  arr.sort((a, b) => a - b);
  const median = arr[Math.floor((arr.length - 1) / 2)];
  let l = 0,
    r = arr.length - 1;
  const res: number[] = [];

  while (res.length < k) {
    if (strongCompare(arr[l], arr[r], median) >= 0) {
      res.push(arr[l++]);
    } else {
      res.push(arr[r--]);
    }
  }

  return res;
}
