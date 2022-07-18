function countingSort(intervals: number[][]) {
  let max = -Infinity;
  const map = new Map<number, number[]>();

  intervals.forEach(([start, end]) => {
    max = Math.max(max, start);

    if (!map.has(start)) {
      map.set(start, [start, end]);
      return;
    }

    const current = map.get(start)!;
    map.set(start, [start, Math.max(current[1], end)]);
  });

  const res: number[][] = [];
  for (let i = 0; i <= max; i++) {
    if (map.has(i)) {
      res.push(map.get(i)!);
    }
  }

  return res;
}

function merge(intervals: number[][]): number[][] {
  const res: number[][] = [];
  intervals = countingSort(intervals);
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = current;
    const [start, end] = intervals[i];

    if (currentEnd < start) {
      res.push(current);
      current = intervals[i];
    } else {
      current = [Math.min(start, currentStart), Math.max(end, currentEnd)];
    }
  }

  res.push(current);

  return res;
}
