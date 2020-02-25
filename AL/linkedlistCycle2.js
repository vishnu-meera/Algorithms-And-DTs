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

// Consider the following linked list, where E is the cylce entry and X, the crossing point of fast and slow.
// H: distance from head to cycle entry E
// D: distance from E to X
// L: cycle length
//                   _____
//                  /     \
// head_____H______E       \
//                 \       /
//                  X_____/

// If fast and slow both start at head, when fast catches slow, slow has traveled H+D and fast 2(H+D).
// Assume fast has traveled n loops in the cycle, we have:
// 2H + 2D = H + D + L  -->  H + D = nL  --> H = nL - D
// Thus if two pointers start from head and X, respectively, one first reaches E, the other also reaches E.
// In my solution, since fast starts at head.next, we need to move slow one step forward in the beginning of part 2
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;
  let slow = head,
    fast = head.next;
  try {
    while (slow !== fast) {
      slow = slow.next;
      if (fast.next === null) return null;
      fast = fast.next.next;
    }
  } catch {
    return null;
  }
  slow = slow.next;
  while (slow !== head) {
    slow = slow.next;
    head = head.next;
  }

  return slow;
};
