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
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let merged = new ListNode(0);
  let head = merged;

  while ((l1 !== null) & (l2 !== null)) {
    if (l1.val < l2.val) {
      merged.next = new ListNode(l1.val);
      merged = merged.next;
      l1 = l1.next;
    } else {
      merged.next = new ListNode(l2.val);
      merged = merged.next;
      l2 = l2.next;
    }
  }

  if (l1) {
    merged.next = l1;
  } else {
    merged.next = l2;
  }

  return head.next;
};
