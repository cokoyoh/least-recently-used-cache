interface LRUCacheInterface<K, V> {
  get(key: K): V | number;
  put(key: K, value: V): void
}

class Collection<K, V> implements LRUCacheInterface<K, V> {
  private readonly capacity: number;
  private collection: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.collection = new Map<K, V>();
  }

  private update(key: K, value: V): void {
    this.collection.delete(key);
    this.collection.set(key, value);
  }

  get(key: K): V | -1 {
    if (!this.collection.has(key)) {
      return -1;
    }

    const value: V = this.collection.get(key);

    this.update(key, value);

    return value;
  }

  put(key: K, value: V) {
    const keyExists = this.collection.has(key);

    if (keyExists) {
      this.update(key, value);
    }

    this.collection.set(key, value);

    if (this.collection.size > this.capacity) {
      const leastUsedKey = this.collection.keys().next().value;
      this.collection.delete(leastUsedKey);
    }
  }

  /**
   * This is just for show - pun intended
   */
  show(): void {
    console.log({collection: this.collection });
  }
}

export { Collection };
