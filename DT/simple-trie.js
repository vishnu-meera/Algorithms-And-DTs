class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!(c in node)) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (const c of word) {
      if (c in node) {
        node = node[c];
      } else {
        return null;
      }
    }
    return node;
  }

  search(word) {
    let node = this.traverse(word);
    return node !== null && node.isWord === true;
  }

  startsWith(word) {
    let node = this.traverse(word);
    return node !== null;
  }
}

const t = new Trie();
t.insert("ball");
t.insert("bat");
t.insert("bat");
t.insert("doll");
t.insert("dork");
t.insert("dork");
t.insert("do");
t.insert("dorm");
t.insert("send");
t.insert("sense");
t.insert("running");
t.insert("run");

console.log(t.root.d);
