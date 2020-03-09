/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
class UnionFind {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.sz = new Array(m * n + 1);
    this.Id = new Array(m * n + 1);
    this.count = 0;
  }
  size() {
    return this.count;
  }
  index(x, y) {
    return x * this.n + y + 1;
  }
  add(x, y) {
    let i = this.index(x, y);
    this.Id[i] = i;
    this.sz[i] = 1;
    this.count++;
    return i;
  }
  get(x, y) {
    if (x >= 0 && x < this.m && y >= 0 && y < this.n)
      return this.Id[this.index(x, y)];
    return 0;
  }
  find(p, q) {
    return this.root(p) === this.root(q);
  }
  root(i) {
    for (; i !== this.Id[i]; i = this.Id[i]) this.Id[i] = this.Id[this.Id[i]];
    return i;
  }
  unite(p, q) {
    let i = this.root(p),
      j = this.root[q];
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] = this.sz[j] + this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] = this.sz[i] + this.sz[j];
    }
    this.count--;
  }
}
var numIslands2 = function(m, n, positions) {
  const directions = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0]
  ];
  const result = [];
  if (m <= 0 || n <= 0) return result;
  const UF = new UnionFind(m, n);
  for (const pos of positions) {
    const [x, y] = pos;
    const p = UF.add(x, y);
    for (const dir of directions) {
      const q = UF.get(x + dir[0], y + dir[1]);
      if (q > 0 && !UF.find(p, q)) {
        UF.unite(p, q);
      }
    }

    result.push(UF.size());
  }
  return result;
};
