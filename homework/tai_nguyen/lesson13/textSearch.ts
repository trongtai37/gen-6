export function textSearch(text: string, search: string) {
  const regex = new RegExp(`((${search})+)`, 'gi');
  return text.replace(regex, `<b>$1</b>`);
}

console.log(textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox'));
console.log(textSearch('The hardworking Dog overtakes the lazy dog', 'dog'));
console.log(textSearch('aaa', 'aa'));
console.log(textSearch('aaaa', 'aa'));
console.log(textSearch('aaxyaa', 'aa'));
