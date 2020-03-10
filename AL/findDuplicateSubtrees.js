const findDuplicateSubtrees = root => {
  const map = {};
  const res = [];

  const serialze = node => {
    if (node === null) return "*";
    let path = node.val + serialze(node.left) + serialze(node.right);
    map[path] ? ++map[path] : (map[path] = 1);
    if (map[path] === 2) res.push(node);
    return path;
  };
  serialze(root);
  return res;
};
