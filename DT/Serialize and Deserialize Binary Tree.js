/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const q = [];
  const serialize = [];
  if (root == null) return [];
  q.push(root);

  while (q.length > 0) {
    let node = q.shift();
    serialize.push(node !== null ? node.val : null);
    if (node !== null) {
      q.push(node.left);
      q.push(node.right);
    }
  }

  return serialize;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data[0] == null) return null;
  const node = new TreeNode(data.shift());
  const q = [node];

  while (q.length > 0) {
    let node = q.shift();
    let left = data.shift();
    let right = data.shift();
    node.left = left !== null ? new TreeNode(left) : null;
    node.right = right !== null ? new TreeNode(right) : null;
    if (node.left !== null) q.push(node.left);
    if (node.right !== null) q.push(node.right);
  }
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
