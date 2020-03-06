class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertFront(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    } else this.head = node;

    this.length += 1;
  }

  insertEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = node;
      node.previous = curNode;
    }
    this.length += 1;
  }

  reverse() {
    if (!this.head) console.log("no elements");
    if (!this.head.next) return;

    let curNode = this.head;
    let temp = null;
    while (curNode) {
      temp = curNode.previous;
      curNode.previous = curNode.next;
      curNode.next = temp;
      curNode = curNode.previous;
    }
    temp = temp.previous;
    this.head = temp;
  }

  removeFront() {
    if (!this.head) console.log("no elements");
    const node = this.head.next;
    node.previous = null;
    this.head = node;
    this.head = node;
    this.length -= 1;
  }

  removeEnd() {
    if (!this.head) console.log("no elements");
    if (this.head.next === null) this.head = null;
    else {
      let node = this.head;
      while (node.next.next) {
        node = node.next;
      }
      node.next = null;
    }
    this.length -= 1;
  }

  print() {
    if (!this.head) console.log("no elements");
    let node = this.head;
    let s = "";
    while (node) {
      s += `${node.value} ->`;
      node = node.next;
    }
    console.log(s);
  }
}
