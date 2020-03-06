const Vocab = (string, n) => {
  const p = string
    .toLowerCase()
    .replace(/['.?!,’]/g, " ")
    .split(" ")
    .filter(x => x.length > 0);

  const res = [];
  let i = 0;
  const map = new Map();

  for (const word of p) {
    let x = 1;
    if (map.has(word)) {
      x = map.get(word) + 1;
    }
    map.set(word, x);
  }

  map[Symbol.iterator] = function*() {
    yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
  };

  map[Symbol.iterator] = function*() {
    yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
  };

  for (const c of [...map]) {
    res.push(c[0]);
    i++;
    if (i === n) break;
  }

  return res;
};
