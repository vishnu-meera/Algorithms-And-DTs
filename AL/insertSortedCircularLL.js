function Node(val, next) {
  this.val = val;
  this.next = next;
}
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

const insert = function(head, insertVal) {
  if (head === null) {
    head = new Node(insertVal);
    head.next = head;
    return head;
  }

  let prev = head;
  let next = head.next;
  let endFlag = true;

  while (true) {
    if (
      (prev.val <= insertVal && insertVal <= next.val) ||
      (prev.val > next.val && insertVal < next.val) ||
      (prev.val > next.val && insertVal > next.val)
    ) {
      prev.next = new Node(insertVal, next);
      endFlag = false;
      break;
    }

    next = next.next;
    prev = prev.next;

    if (prev === head) break;
  }

  if (endFlag) prev.next = new Node(insertVal, next);

  return head;
};
