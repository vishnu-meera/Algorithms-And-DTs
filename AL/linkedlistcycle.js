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
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;

  try {
    while (slow !== fast) {
      fast = fast.next.next;
      slow = slow.next;
    }
  } catch {
    return false;
  }

  return true;
};
