type MapType = Map<string, number>;

const MAX_DISTINCT_CHARACTERS_COUNT = 2;

function increaseFrequency(map: MapType, c: string) {
  if (!map.has(c)) {
    map.set(c, 0);
  }

  map.set(c, map.get(c)! + 1);
}

function decreaseFrequency(map: MapType, c: string) {
  if (!map.has(c)) {
    return;
  }
  const current = map.get(c)!;
  if (current === 1) map.delete(c);
  else map.set(c, current - 1);
}

function lengthOfLongestSubstringTwoDistinct(s: string): number {
  let l = 0,
    r = 0;
  let res = 0;
  const map = new Map() as MapType;

  increaseFrequency(map, s.charAt(0));

  while (r < s.length) {
    if (map.size <= MAX_DISTINCT_CHARACTERS_COUNT) {
      res = Math.max(res, r - l + 1);
      r++;
      if (r < s.length) {
        increaseFrequency(map, s.charAt(r));
      }
    } else {
      decreaseFrequency(map, s.charAt(l));
      l++;
    }
  }

  return res;
}
