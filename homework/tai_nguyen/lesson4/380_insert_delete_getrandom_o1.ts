class RandomizedSet {
  private readonly _array: number[];
  private readonly _map: Map<
    number /* store the value */,
    number /* store the position of value in _array */
  >;

  constructor() {
    this._array = [];
    this._map = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this._map.has(val)) {
      return false;
    }

    const length = this._array.push(val);
    this._map.set(val, length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (this._map.has(val)) {
      const valPosition = this._map.get(val)!;
      const lastPosition = this._array.length - 1;
      const lastValue = this._array[lastPosition];

      [this._array[valPosition], this._array[lastPosition]] = [
        this._array[lastPosition],
        this._array[valPosition],
      ]; // Swap current value and the last item

      // update the position of last item
      this._map.set(lastValue, valPosition);

      // delete
      this._array.pop();
      this._map.delete(val);

      return true;
    }

    return false;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this._array.length);
    return this._array[randomIndex];
  }
}
