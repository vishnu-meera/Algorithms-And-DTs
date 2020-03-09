const boundaryOfBinaryTree = root => {
  const boundary = [];
  if (root === null) return boundary;
  boundary.push(root.val);
  //preOrder -- left boundaries
  const dfs_left = node => {
    if (node === null || (node.left == null && node.right == null)) return;

    boundary.push(node.val);
    if (node.left) dfs_left(node.left);
    else dfs_left(node.right);
  };
  //inorder -- bottom boundaries

  const dfs_right = node => {
    if (node === null) return;

    dfs_leaves(node.left);
    if (node !== root && node.left == null && node.right == null)
      boundary.push(node.val);
    dfs_leaves(node.right);
  };

  //postorder -- right boundaries
  const dfs_right = node => {
    if (node === null || (node.left == null && node.right == null)) return;

    if (node.right) dfs_right(node.right);
    else dfs_right(node.left);
    boundary.push(node.val);
  };

  dfs_left(root.left);
  dfs_leaves(root);
  dfs_right(root.right);

  return boundary;
};
