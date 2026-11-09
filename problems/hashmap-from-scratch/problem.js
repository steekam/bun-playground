class HashMap {
  constructor(capacity = 8) {
    this.buckets = Array.from({ length: capacity }, () => []);
    this.size = 0;
  }

  indexFor(key, capacity = this.buckets.length) {
    return ((key % capacity) + capacity) % capacity;
  }

  resize() {
    const entries = this.buckets.flat();
    this.buckets = Array.from({ length: this.buckets.length * 2 }, () => []);
    for (const entry of entries) this.buckets[this.indexFor(entry[0])].push(entry);
  }

  put(key, value) {
    const bucket = this.buckets[this.indexFor(key)];
    const entry = bucket.find(([existing]) => existing === key);
    if (entry) {
      entry[1] = value;
      return;
    }
    bucket.push([key, value]);
    this.size += 1;
    if (this.size > this.buckets.length * 0.75) this.resize();
  }

  get(key) {
    const entry = this.buckets[this.indexFor(key)].find(([existing]) => existing === key);
    return entry ? entry[1] : -1;
  }

  remove(key) {
    const bucket = this.buckets[this.indexFor(key)];
    const index = bucket.findIndex(([existing]) => existing === key);
    if (index === -1) return;
    bucket.splice(index, 1);
    this.size -= 1;
  }
}

function validate(operations) {
  const map = new HashMap();
  const results = [];
  for (const [name, key, value] of operations) {
    if (name === "put") map.put(key, value);
    else if (name === "remove") map.remove(key);
    else results.push(map.get(key));
  }
  return results;
}

export { HashMap, validate };
