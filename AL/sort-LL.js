/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const sortList = function(head) {
  if (head === null || head.next === null) return head;

  let size = 0;
  let current = head;
  while (current !== null) {
    size += 1;
    current = current.next;
  }

  let dummy = new ListNode("d");
  dummy.next = head;

  for (let step = 1; step < size; step <<= 1) {
    let prev = dummy;
    let cur = dummy.next;

    while (cur !== null) {
      let left = cur;
      let right = split(left, step);
      cur = split(right, step);
      prev = merge(left, right, prev);
    }
  }

  return dummy.next;
};

const split = (node, step) => {
  if (node === null) return null;
  for (let i = 1; i < step && node.next !== null; i++) node = node.next;

  const returnNode = node.next;
  node.next = null;
  return returnNode;
};

const merge = (left, right, node) => {
  let sorted = node;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      sorted.next = left;
      left = left.next;
    } else {
      sorted.next = right;
      right = right.next;
    }
    sorted = sorted.next;
  }

  if (left !== null) sorted.next = left;
  else if (right !== null) sorted.next = right;

  while (sorted.next !== null) sorted = sorted.next;

  return sorted;
};
