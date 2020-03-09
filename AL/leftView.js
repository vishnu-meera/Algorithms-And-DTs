const leftSideView = root => {
  let leftValues = [];
  let q = [];
  q.push({
    node: root,
    level: 0
  });

  while (q.length !== 0) {
    let { node, level } = q.shift();
    if (node !== null) {
      if (level === leftValues.length) leftValues.push(node.val);
      q.push({
        node: node.left,
        level: level + 1
      });
      q.push({
        node: node.right,
        level: level + 1
      });
    }
  }
  return leftValues;
};
