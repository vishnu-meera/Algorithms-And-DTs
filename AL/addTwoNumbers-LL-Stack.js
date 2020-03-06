/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = [];
  const stack2 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let node = new ListNode(0);
  let sum = 0;

  while (stack1.length !== 0 || stack2.length !== 0) {
    if (stack1.length !== 0) sum += stack1.pop();
    if (stack2.length !== 0) sum += stack2.pop();
    node.val = sum % 10;
    let head = new ListNode(Math.floor(sum / 10));
    head.next = node;
    node = head;
    sum = Math.floor(sum / 10);
  }

  return node.val === 0 ? node.next : node;
};
