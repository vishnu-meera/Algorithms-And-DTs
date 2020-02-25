/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (s === null || s.length === 0) return 0;

  let temp = {};
  let res = 0;
  let ones = 0;

  for (const c of s) {
    if (temp[c]) temp[c] += 1;
    else temp[c] = 1;
  }

  for (const k in temp) {
    if (temp[k] % 2 === 0) res += temp[k];
    else {
      res += temp[k] - 1;
      ones = 1;
    }
  }

  return res + ones;
};
