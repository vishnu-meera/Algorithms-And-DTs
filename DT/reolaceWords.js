/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
class Trie {
  constructor() {
    this.root = {};
  }

  add(word) {
    let node = this.root;
    for (const c of word) {
      if (!(c in node)) node[c] = {};
      node = node[c];
    }
    node.end = true;
  }

  getRootWord(word) {
    let node = this.root;
    let rootWord = "";

    for (const c of word) {
      if (c in node) {
        rootWord += c;
        if (node[c].end) {
          return rootWord;
        }
        node = node[c];
      } else return null;
    }

    return null;
  }
}

var replaceWords = function(dict, sentence) {
  const t = new Trie();
  for (const w of dict) {
    t.add(w);
  }
  //method 1
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let root = t.getRootWord(words[i]);
    if (root) words[i] = root;
  }

  //method 2
  //   let words = [];
  //   let word = "";

  //   for (let i = 0; i < sentence.length; i++) {
  //     let charKey = sentence[i].charCodeAt(0);
  //     if (charKey >= 97 && charKey < 123) {
  //       word += sentence[i];
  //     } else {
  //       if (word.length > 0) {
  //         let root = t.getRootWord(word);
  //         if (root) words.push(root);
  //         else words.push(word);
  //         word = "";
  //       }
  //     }
  //   }

  //   if (word.length > 0) {
  //     let root = t.getRootWord(word);
  //     if (root) words.push(root);
  //     else words.push(word);
  //   }

  return words.join(" ");
};
