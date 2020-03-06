/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, Graph = new Map()) {
  if (node === null) return null;
  if (Graph.has(node.val)) return Graph.get(node.val);
  Graph.set(node.val, new Node(node.val, []));
  for (const ne of node.neighbors) {
    let clone = cloneGraph(ne, Graph);
    Graph.get(node.val).neighbors.push(clone);
  }
  return Graph.get(node.val);
};
