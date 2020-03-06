class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const _insert = (root, node) => {
      if (node.value < root.value) {
        if (root.left) {
          _insert(root.left, node);
        } else {
          root.left = node;
        }
      } else {
        if (root.right) {
          _insert(root.right, node);
        } else {
          root.right = node;
        }
      }
    };

    let node = new Node(value);
    if (this.root) {
      _insert(this.root, node);
    } else {
      this.root = node;
    }
  }

  inOrderR(node = this.root) {
    if (!node) return;

    this.inOrderR(root.left);
    console.log("V: ", root.value);
    this.inOrderR(root.right);
  }

  inOrder() {
    let rs = [];
    let stack = [];
    let node = this.root;

    while (true) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      if (stack.length === 0) break;
      node = stack.pop();
      console.log("val :", node.value);
      rs.push(node.val);
      node = node.right; // no stack push
    }
    return rs;
  }

  inOrderPredecessorChange() {
    let stack = [];
    let node = this.root;
    let previousValue = -1;
    while (true) {
      while (node) {
        stack.push(node);
        node = node.left;
      }

      if (stack.length === 0) break;
      node = stack.pop();

      let temp = node.value;
      node.value = previousValue;
      previousValue = temp;

      node = node.right;
    }
  }

  inOrderPredecessor(data) {}
  predOrderR(node = this.root) {
    if (!node) return;

    console.log("V: ", root.value);
    this.predOrderR(root.left);
    this.predOrderR(root.right);
  }

  predOrder() {
    let rs = [];
    let stack = [];
    let node = this.root;

    while (true) {
      while (node) {
        console.log("val :", node.value);
        rs.push(node.val);
        stack.push(node);
        node = node.left;
      }
      if (stack.length === 0) break;
      node = stack.pop();
      node = node.right; // no stack push
    }
    return rs;
  }
}

const bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(4);
bt.insert(15);
bt.insert(6);
bt.insert(3);

console.log("*****---*****");
bt.predOrderR();
console.log("*****---*****");
bt.predOrderR();
console.log("*****---*****");
// bt.inOrderPredecessorChange();
// bt.inOrder();

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const result = [];
  if (root === null) return result;
  const stack1 = [];
  const stack2 = [];
  let temp = [];
  stack1.push(root);

  while (stack1.length !== 0 || stack2.length !== 0) {
    while (stack1.length !== 0) {
      let x = stack1.pop();
      if (x !== null) {
        console.log("x ", x.val);
        temp.push(x.val);
        stack2.push(x.left);
        stack2.push(x.right);
      }
    }

    if (temp.length !== 0) result.push(temp);
    temp = [];
    while (stack2.length !== 0) {
      let x = stack2.pop();
      if (x !== null) {
        console.log("y ", x.val);
        temp.push(x.val);
        stack1.push(x.right);
        stack1.push(x.left);
      }
    }

    if (temp.length) result.push(temp);
    temp = [];
  }

  console.log(result);
  return result;
};
