// @ts-nocheck
interface Listener {
  [key: PropertyKey]: Function[];
}

export class StoreData<T extends {} = {}> {
  private proxyObj: T;
  private listener: Listener = {};

  constructor(init: T = {} as any) {
    const handler: ProxyHandler<T> = {
      set: (target, key, newValue) => {
        if (key in this.listener) {
          this.listener[key].forEach((callback) =>
            callback(target[key], newValue, key)
          );
        }

        target[key] = newValue;
        return true;
      },
    };

    this.proxyObj = new Proxy<T>(init, handler);
  }

  has(key: PropertyKey): boolean {
    return key in this.proxyObj;
  }

  add(key: PropertyKey, value: unknown): void {
    this.proxyObj[key] = value;
  }

  on(eventKey: PropertyKey, handler: Function): Function {
    if (typeof eventKey === 'string' && eventKey.startsWith('change:')) {
      eventKey = eventKey.replace('change:', '');
    }

    this.listener[eventKey] = [handler].concat(this.listener[eventKey] || []);

    return () => {
      this.listener[eventKey] = this.listener[eventKey].filter(
        (fn) => fn !== handler
      );
    };
  }
}

let store = new StoreData();
store.add('name', 'joe');
store.add('age', 30);
console.log(store.has('age')); // return true
console.log(store.has('animal')); // return false
store.add('name', 'emma');
store.on('change:name', (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});
store.add('name', 'john');
store.on('age', (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});
store.add('age', 26);
store.on('change:age', (old_val, new_val, key) => {
  console.log(`${old_val < new_val ? 'older now' : ''}`);
});
store.add('age', 28);
store.add('age', 45);
