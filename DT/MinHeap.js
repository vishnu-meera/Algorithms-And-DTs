class MinHeap {
  constructor(size) {
    this.heap = new Array(size);
    this.size = 0;
    this.capacity = size;
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  getMin() {
    return this.heap[0];
  }

  insert(value) {
    if (this.size === this.capacity) throw new Error("Heap is full");
    this.heap[this.size] = value;
    this.size += 1;
    this.fixUp(this.size - 1);
  }

  fixUp(index) {
    let parent = Math.floor(index / 2);
    if (index > 0 && this.heap[index] < this.heap[parent]) {
      this.swap(index, parent);
      this.fixUp(parent);
    }
  }

  poll() {
    let min = this.getMin();
    let s = this.size - 1;
    this.swap(0, s);
    this.size = s;
    this.fixDown(0);
    return min;
  }

  fixDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 1;
    let next = index;
    if (left < this.size && this.heap[left] < this.heap[index]) next = left;
    if (right < this.size && this.heap[right] < this.heap[left]) next = right;
    if (next !== index) {
      this.swap(next, index);
      this.fixDown(next);
    }
  }

  heap_sort() {
    let result = [];
    while (this.size > 0) {
      result.push(this.poll());
    }
    return result;
  }
}

const h = new MinHeap(11);

h.insert(10);
h.insert(20);
h.insert(5);
h.insert(6);
h.insert(8);
h.insert(22);
h.insert(18);
h.insert(25);
h.insert(11);
h.insert(30);
h.insert(26);
console.log(h.heap_sort());
