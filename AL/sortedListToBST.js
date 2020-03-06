/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
  if (head === null) return null;
  let size = 0;
  let node = head;
  let runner = head;

  while (runner !== null) {
    runner = runner.next;
    size++;
  }

  const inOrderHelper = (start, end) => {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let left = inOrderHelper(start, mid - 1);

    const treenode = new TreeNode(node.val);
    treenode.left = left;
    node = node.next;

    let right = inOrderHelper(mid + 1, end);
    treenode.right = right;

    return treenode;
  };

  return inOrderHelper(0, size - 1);
};
