function accountsMerge(accounts: string[][]): string[][] {
  const parent = new Array(accounts.length).fill(true).map((_, i) => i);
  const map = new Map<string, number>();

  function getParent(x: number) {
    if (parent[x] != x) {
      parent[x] = getParent(parent[x]);
    }

    return parent[x];
  }

  accounts.forEach(([_, ...emails], index) => {
    emails.forEach((email) => {
      if (map.has(email)) {
        parent[getParent(index)] = getParent(map.get(email)!);
      } else {
        map.set(email, index);
      }
    });
  });

  const resMap = new Map<number, string[]>();
  for (const [email, index] of map.entries()) {
    const parentIndex = getParent(index);
    if (!resMap.has(parentIndex)) {
      resMap.set(parentIndex, []);
    }

    resMap.set(parentIndex, resMap.get(parentIndex)!.concat(email));
  }

  return Array.from(resMap.entries()).map(([index, emails]) => {
    return [accounts[index][0]].concat(emails.sort());
  });
}
