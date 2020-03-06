class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static merge(s1, s2) {
    const s3 = new LinkedList();
    let nod1 = s1.head;
    let nod2 = s2.head;

    while (nod1 && nod2) {
      if (nod1.value <= nod2.value) {
        s3.insertEnd(nod1.value);
        nod1 = nod1.next;
      } else {
        s3.insertEnd(nod2.value);
        nod2 = nod2.next;
      }
    }
    while (nod1) {
      s3.insertEnd(nod1.value);
      nod1 = nod1.next;
    }

    while (nod2) {
      s3.insertEnd(nod2.value);
      nod2 = nod2.next;
    }

    return s3;
  }

  static detectloop(s1) {
    if (s1 === null || s1.head === null) return false;
    if (s.head.next === null) return false;

    let slow = s1.head;
    let fast = s2.head.next;
    try {
      while (slow.value !== fast.value) {
        slow = slow.next;
        fast = fast.next.next;
      }
    } catch {
      return false;
    }
    return true;
  }

  insertFront(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
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
    }
    this.length += 1;
  }

  reverse() {
    if (!this.head) console.log("no elements");
    let curNode = this.head;
    let prev = null;
    let next = null;

    while (curNode) {
      next = curNode.next;
      curNode.next = prev;
      prev = curNode;
      curNode = next;
    }
    this.head = prev;
  }

  removeFront() {
    if (!this.head) console.log("no elements");
    this.head = this.head.next;
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

const LL = new LinkedList();
LL.insertFront(10);
LL.insertFront(9);
LL.insertFront(8);
LL.insertFront(7);
LL.insertFront(6);
LL.insertFront(5);
LL.insertEnd(11);
LL.print();
LL.reverse();
LL.print();

export default LinkedList;
