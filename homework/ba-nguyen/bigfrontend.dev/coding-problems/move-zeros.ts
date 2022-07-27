function moveZeros(list: Array<any>): void {
  let boundary = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      let temp = list[i];
      list[i] = list[boundary];
      list[boundary] = temp;
      boundary++;
    }
  }
}
