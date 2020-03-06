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
  let carry = 0;
  let sum = 0;
  let s1 = 0;
  let s2 = 0;
  let node = new ListNode(0);
  let head = node;

  while (l1 || l2) {
    [s1, s2, sum] = [0, 0, 0];

    if (l1) {
      s1 = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      s2 = l2.val;
      l2 = l2.next;
    }

    sum = s1 + s2 + carry;

    if (sum >= 10) carry = Math.floor(sum / 10);
    else carry = 0;

    sum = sum % 10;
    node.next = new ListNode(sum);
    node = node.next;
  }

  if (carry > 0) {
    node.next = new ListNode(carry);
    node = node.next;
  }

  return head.next;
};
