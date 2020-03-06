/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  let node = null;

  while (slow && fast) {
    slow = slow.next;
    if (fast.next) fast = fast.next.next;
    else fast = fast.next;
  }

  while (slow) {
    let next = slow.next;
    slow.next = node;
    node = slow;
    slow = next;
  }

  while (node && head) {
    if (head.val !== node.val) return false;
    node = node.next;
    head = head.next;
  }

  return true;
};
