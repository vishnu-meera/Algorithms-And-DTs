/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) return null;
  n = head;
  const map = new Map();
  while (n) {
    map.set(n, new Node(n.val));
    n = n.next;
  }
  n = head;

  while (n) {
    map.get(n).next = map.get(n.next) || null;
    map.get(n).random = map.get(n.random) || null;
    n = n.next;
  }

  return map.get(head);
};
