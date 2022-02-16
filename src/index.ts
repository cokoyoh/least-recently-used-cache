import { Collection } from './collection';

const lRUCache = new Collection<number, number>(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
lRUCache.get(1);
lRUCache.put(3, 3);
// const keyTwo = lRUCache.get(2);
// console.log({ keyTwo });
lRUCache.put(4, 4);
console.log(lRUCache.get(1))
console.log(lRUCache.get(3))
console.log(lRUCache.get(4))
console.log(lRUCache.show());
