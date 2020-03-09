/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
  let p1 = -1;
  let p2 = -1;
  let d = words.length;

  let flag = false;
  let samewordCount = 0;
  if (word1 === word2) flag = true;

  for (let i = 0; i < words.length; i++) {
    if (flag) {
      if (words[i] === word1) {
        if (samewordCount % 2 === 0) p1 = i;
        if (samewordCount % 2 === 1) p2 = i;
        samewordCount += 1;
      }
    } else {
      if (words[i] === word1) {
        p1 = i;
      }
      if (words[i] === word2) {
        p2 = i;
      }
    }
    if (p1 !== -1 && p2 !== -1) d = Math.min(d, Math.abs(p1 - p2));
  }
  return d;
};
