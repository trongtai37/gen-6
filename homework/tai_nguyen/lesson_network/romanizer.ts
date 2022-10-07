const REF_VALUES = Object.entries({
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
})
  .map(([arabic, roman]) => ({ arabic: Number(arabic), roman }))
  .sort((itemA, itemB) => itemA.arabic - itemB.arabic);

function romanizer(n: number): string {
  if (n === 0) return '';

  for (let i = REF_VALUES.length - 1; i >= 0; i--) {
    const current = REF_VALUES[i];
    if (n >= current.arabic) {
      return current.roman
        .repeat(Math.floor(n / current.arabic))
        .concat(romanizer(n % current.arabic));
    }
  }

  return '';
}

function solve(arr: number[]) {
  return arr.map(romanizer);
}

console.log(solve([1, 2, 3, 4, 5])); // [ 'I', 'II', 'III', 'IV', 'V' ]
console.log(solve([75, 80, 99, 100, 50])); //[ 'LXXV', 'LXXX', 'XCIX', 'C', 'L' ]
