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
var plusOne = function(head) {
  let node = head;
  let node1 = head;
  let q = [];
  let carry = 0;

  while (node) {
    q.push(node.val);
    node = node.next;
  }

  for (let i = q.length - 1; i >= 0; i--) {
    let digit = q[i];

    if (i === q.length - 1) digit += 1;
    digit += carry;

    if (digit >= 10) {
      q[i] = digit % 10;
      carry = Math.floor(digit / 10);
    } else {
      q[i] = digit;
      carry = 0;
    }
  }

  while (node1) {
    node1.val = q.shift();
    node1 = node1.next;
  }

  if (carry) {
    let node2 = new ListNode(carry);
    node2.next = head;
    head = node2;
  }

  return head;
};
