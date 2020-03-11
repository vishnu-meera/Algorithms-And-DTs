const map = new Map();
map[Symbol.iterator] = function*() {
  yield* [...this.entries()].sort((a, b) => a[0] - b[0]);
};
