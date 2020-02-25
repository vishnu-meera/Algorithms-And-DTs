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

  inOrderR() {
    const _inOrder = root => {
      if (!root) return;

      _inOrder(root.left);
      console.log("V: ", root.value);
      _inOrder(root.right);
    };
    _inOrder(this.root);
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

  inOrderMorris() {
    let rs = [];
    let node = this.root;
    while (node) {
      let pre = node.left;

      if (node.left) {
        while (pre.right !== null && pre.right !== root) pre = pre.right;

        if (!pre.right) {
          pre.right = node;
          node = node.left;
        } else {
          pre.right = null;
          rs.push(node.val);
          node = node.right;
        }
      } else {
        rs.push(node.val);
        node = node.right;
      }
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
  predOrderR() {
    const _preOrder = root => {
      if (!root) return;

      console.log("V: ", root.value);
      _preOrder(root.left);
      _preOrder(root.right);
    };
    _preOrder(this.root);
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
