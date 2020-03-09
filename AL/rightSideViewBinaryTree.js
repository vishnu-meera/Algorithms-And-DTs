const rightSideView_dfs = root => {
  const rightValues = [];
  const dfs = (node, level) => {
    if (node !== null) {
      if (rightValues.length === level) {
        rightValues.push(node.val);
      }
      dfs(node.right, level + 1);
      dfs(node.left, level + 1);
    }
  };
  dfs(root, 0);
  return rightValues;
};

const rightSideView = root => {
  const rightValues = [];
  const q = [];
  q.push({ node: root, level: 0 });
  while (q.length !== 0) {
    let { node, level } = q.shift();
    if (node !== null) {
      if (level === rightValues.length) rightValues.push(node.val);
      q.push({ node: node.right, level: level + 1 });
      q.push({ node: node.left, level: level + 1 });
    }
  }
  return rightValues;
};
