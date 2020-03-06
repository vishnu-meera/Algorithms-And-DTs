class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
    this.count = 0;
    this.setEnd = () => {
      this.end = true;
      this.count += 1;
    };
    this.isEnd = () => this.end;
    this.getCount = () => this.count;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    if (node.keys.has(word) && node.keys.get(word).isEnd()) return true;
    else return false;
  }

  print() {
    let words = new Array();
    const getWord = (node, string) => {
      if (node.keys.size !== 0) {
        for (const letter of node.keys.keys()) {
          getWord(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push({ string, count: node.count });
        }
      } else {
        if (string.length > 0) words.push({ string, count: node.count });
        return;
      }
    };
    getWord(this.root, new String());
    return words;
  }
}

const t = new Trie();
t.add("ball");
t.add("bat");
t.add("bat");
t.add("doll");
t.add("dork");
t.add("dork");
t.add("do");
t.add("dorm");
t.add("send");
t.add("sense");
t.add("running");
t.add("run");
console.log(t.isWord("run"));
console.log(t.isWord("running"));
console.log(t.print());
