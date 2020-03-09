/**
 * @param {string[]} words
 */
class WordDistance {
  constructor(words) {
    this.list = words || [];
  }

  /**
   * @param {string} word1
   * @param {string} word2
   * @return {number}
   */
  shortest(word1, word2) {
    let p1 = -1;
    let p2 = -1;
    let d = this.list.length;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === word1) p1 = i;
      if (this.list[i] === word2) p2 = i;
      if (p1 !== -1 && p2 !== -1) d = Math.min(d, Math.abs(p1 - p2));
    }
    return d;
  }
}
