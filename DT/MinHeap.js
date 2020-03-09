class MinHeap {
  constructor(capacity) {
    this.heap = new Array(capacity);
    this.heapSize = 0;
    this.capacity = capacity;
  }

  getMax() {
    return this.heap[0];
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(value) {
    if (this.heapSize === this.capacity) throw new Error("Heap is full!!!");
    this.heap[this.heapSize] = value;
    this.heapSize += 1;
    this.fixUp(this.heapSize - 1);
  }

  fixUp(index) {
    let parentIndex = Math.floor((index + 1) / 2) - 1;
    if (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex);
      this.fixUp(parentIndex);
    }
  }

  fixDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let temp = index;
    if (left < this.heapSize && this.heap[temp] > this.heap[left]) {
      temp = left;
    }
    if (right < this.heapSize && this.heap[left] > this.heap[right]) {
      temp = right;
    }
    if (temp !== index) {
      this.swap(temp, index);
      this.fixDown(temp);
    }
  }

  poll() {
    let max = this.getMax();
    let h = this.heapSize - 1;
    this.swap(0, h);
    this.heapSize = h;
    this.fixDown(0);
    return max;
  }

  heap_sort() {
    let result = [];
    while (this.heapSize > 0) {
      result.push(this.poll());
    }
    return result;
  }
}

const h = new MinHeap(11);

let x = [
  -19,
  -16,
  -14,
  -14,
  -14,
  -12,
  -12,
  -12,
  -7,
  -5,
  -4,
  -4,
  0,
  2,
  7,
  15,
  17,
  18,
  20,
  20
];

var sortedSquares = function(A) {
  if (A === null || A.length === 0) return;
  const squares = new MinHeap(A.length);
  for (const a of A) {
    let s = a * a;
    squares.insert(s);
  }
  return squares.heap_sort();
};

console.log(sortedSquares(x));
