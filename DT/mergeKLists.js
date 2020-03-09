/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
  constructor(capacity) {
    this.items = Array(capacity);
    this.size = 0;
    this.capacity = capacity;
  }
  push(node) {
    if (this.size === this.capacity) return;
    this.items[this.size] = node;
    this.size = this.size + 1;
    this.fixPush(this.size - 1);
  }
  fixPush(index) {
    let parent = Math.floor((index + 1) / 2) - 1;
    if (parent >= 0 && this.items[index].val <= this.items[parent].val) {
      let temp = this.items[parent];
      this.items[parent] = this.items[index];
      this.items[index] = temp;
      this.fixPush(parent);
    }
  }
  pop() {
    if (this.size > 0) {
      let min = this.items[0];
      let s = this.size - 1;

      this.items[0] = this.items[s];
      this.items[s] = min;
      this.size = s;
      this.fixPop(0);
      return min;
    } else return null;
  }
  fixPop(index) {
    console.log("c ", this.capacity, this.capacity % 2 === 0);
    let left = 2 * index;
    let right = 2 * index + 1;
    let largest = index;
    if (left < this.size && this.items[left].val <= this.items[index].val)
      largest = left;
    if (right < this.size && this.items[right].val <= this.items[left].val)
      largest = right;
    if (largest !== index) {
      let temp = this.items[index];
      this.items[index] = this.items[largest];
      this.items[largest] = temp;
      this.fixPop(largest);
    }
  }
}

var mergeKLists = function(lists) {
  let l = lists.length;
  const heap = new MinHeap(l);
  for (const list of lists) if (list !== null) heap.push(list);
  let node = new ListNode(-1);
  let head = node;
  while (true) {
    let n = heap.pop();
    // console.log("poped", n && n.val)
    if (n === null || n === undefined) break;
    node.next = new ListNode(n.val);
    node = node.next;
    n = n.next;
    // console.log("putting ", n && n.val)
    if (n !== null) heap.push(n);
  }
  return head.next;
};
