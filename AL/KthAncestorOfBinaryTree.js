const kthAncestorDFS = (root, value, k) => {
  if (root === null) return null;
  if (
    root.val === value ||
    kthAncestorDFS(root.left, value, k) ||
    kthAncestorDFS(root.right, value, k)
  ) {
    if (k > 0) {
      k -= 1;
    } else if (k == 0) {
      console.log(root.data);
    }
    return root;
  }
};
