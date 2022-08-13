let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

const flatten = (array) => {
  return array.reduce((previousResult, current) => {
    let temp = current;
    if (typeof current === 'object') {
      temp = flatten(current);
    }
    return previousResult.concat(temp);
  }, []);
}

console.log(flatten([arrays]))