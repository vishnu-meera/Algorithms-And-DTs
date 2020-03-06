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
var deleteDuplicates = function(head) {
  if (head === null) return head;
  if (head.next === null) return head;

  let map = {};
  let node = head;
  map[node.val] = 0;

  while (node.next) {
    if (node.next.val in map) {
      node.next = node.next.next;
    } else {
      map[node.next.val] = 0;
      node = node.next;
    }
  }

  return head;
};
