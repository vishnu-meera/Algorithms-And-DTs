class HashMap {
  constructor(initialCapacity = 2) {
    this.bucket = new Array(initialCapacity);
  }

  hash(key) {
    return key.tString().length;
  }

  getIindex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.bucket.length;
    return index;
  }

  set(key, value) {
    this.bucket[this.getIindex(key)] = value;
  }

  get(key) {
    return this.bucket[this.getIindex(key)];
  }
}
