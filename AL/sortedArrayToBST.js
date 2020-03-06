/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums === null || nums.length === 0) return null;
  let size = nums.length;
  let index = 0;

  const inOrderHelper = (start, end) => {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let left = inOrderHelper(start, mid - 1);

    const treeNode = new TreeNode(nums[index]);
    treeNode.left = left;
    index++;

    let right = inOrderHelper(mid + 1, end);
    treeNode.right = right;

    return treeNode;
  };

  return inOrderHelper(0, size - 1);
};
