type InputType = [number, number | null][];

function solve(table: InputType) {
  const map = new Map<
    number /* node */,
    [number /* in_count */, number /* out_count */]
  >();
  function init(key: number, value = [0, 0]) {
    if (!map.has(key)) {
      map.set(key, value as [number, number]);
    }
  }

  table.forEach(([child, parent]) => {
    init(child);
    if (parent) {
      init(parent);

      const [inParent, outParent] = map.get(parent)!;
      const [inChild, outChild] = map.get(child)!;

      map.set(parent, [inParent, outParent + 1]);
      map.set(child, [inChild + 1, outChild]);
    }
  });

  return Array.from(map.entries())
    .sort((itemA, itemB) => itemA[0] - itemB[0])
    .map(([node, [inCount, outCount]]) => {
      if (inCount > 0 && outCount > 0) {
        return [node, 'INNER'];
      } else if (inCount > 0 && outCount === 0) {
        return [node, 'LEAF'];
      }
      return [node, 'ROOT'];
    });
}

console.log(
  solve([
    [1, 2],
    [3, 2],
    [6, 8],
    [9, 8],
    [2, 5],
    [8, 5],
    [5, null],
  ])
);
/**
[
  [ 1, 'LEAF' ], 
  [ 2, 'INNER' ],
  [ 3, 'LEAF' ], 
  [ 5, 'ROOT' ], 
  [ 6, 'LEAF' ], 
  [ 8, 'INNER' ],
  [ 9, 'LEAF' ]  
]
 */
