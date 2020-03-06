class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }
  swap(parent, index) {
    let temp = this.heap[parent];
    this.heap[parent] = this.heap[index];
    this.heap[index] = temp;
  }
  push(obj) {
    let index = this.size;
    this.heap[index] = obj;
    this.size = index + 1;
    this.fixPush(this.size - 1);
  }
  fixPush(index) {
    let parent = Math.floor(index / 2);
    if (parent >= 0 && this.heap[index].length < this.heap[parent].length) {
      this.swap(parent, index);
      this.fixPush(parent);
    }
  }
  pop() {
    let poped = this.heap[0];
    let size = this.size - 1;
    this.swap(0, size);
    this.size = size;
    this.fixPop(0);
    return poped;
  }
  fixPop(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let next = index;

    if (left < this.size && this.heap[left].length < this.heap[index].length)
      left = index;
    if (right < this.size && this.heap[right].length < this.heap[left].length)
      right = index;

    if (next !== index) {
      this.swap(next, index);
      this.fixPop(next);
    }
  }
  getSentence() {
    let ret = "";
    let word =
      this.heap[0].word.charAt(0).toUpperCase() +
      this.heap[0].word.substring(1);
    this.heap[0].word = word;

    for (const w of this.heap) {
      ret = ret + w.word + " ";
    }

    ret = ret.trim() + ".";

    return ret;
  }
}

const orderSentence = sentence => {
  if (sentence === null || sentence.length === 0) return;

  const heap = new MinHeap();
  let word = "";
  for (const char of sentence) {
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) < 91) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) < 123)
    ) {
      word = word + char;
    } else {
      heap.push({
        word: word.toLowerCase(),
        length: word.length
      });
      word = "";
    }
  }
  if (word) {
    heap.push({
      word: word.toLowerCase(),
      length: word.length
    });
  }

  return heap.getSentence();
};

console.log(
  orderSentence(
    "For preparation we suggest spending a little time with our products."
  )
);
