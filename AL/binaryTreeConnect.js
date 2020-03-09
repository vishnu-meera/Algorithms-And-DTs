const connect = root => {
  if (root === null || root.length !== 0) {
    return null;
  }

  const level_node = root;
  while (level_node !== null) {
    let current = level_node;
    while (current !== null) {
      if (current.left !== null) current.left.next = current.right;
      if (current.right !== null && current.next !== null)
        current.right.next = current.next.left;
      current = current.next;
    }
    level_node = level_node.left;
  }

  return root;
};
