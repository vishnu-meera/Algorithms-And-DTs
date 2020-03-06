/**
 * Initialize your data structure here.
 */

class WordDictionary {
  constructor() {
    this.root = {};
  }

  addWord(word) {
    let node = this.root;
    for (const c of word) {
      if (!(c in node)) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isEnd = true;
  }

  search(word) {
    return this.dfs(word, 0, this.root);
  }

  dfs(word, index, node) {
    if (index === word.length) {
      return node.isEnd === true;
    }
    if (word[index] === ".") {
      for (const key in node) {
        if (this.dfs(word, index + 1, node[key])) return true;
      }
    } else {
      if (node[word[index]]) {
        return this.dfs(word, index + 1, node[word[index]]);
      }
    }
    return false;
  }
}
