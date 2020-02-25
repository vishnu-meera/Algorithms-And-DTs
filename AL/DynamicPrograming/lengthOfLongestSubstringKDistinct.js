/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let length = s.length;
  let i = 0,
    j = 0,
    res = 0,
    noOfChar = 0;
  let count = {};

  for (; j < length; j++) {
    let cj = s.charAt(j);

    if (!count[cj]) {
      count[cj] = 1;
      noOfChar += 1;
    } else count[cj] += 1;

    while (noOfChar > k) {
      let ci = s.charAt(i);
      count[ci] -= 1;
      if (count[ci] === 0) {
        noOfChar -= 1;
      }
      i += 1;
    }
    res = Math.max(res, j - i + 1);
  }

  return res;
};
