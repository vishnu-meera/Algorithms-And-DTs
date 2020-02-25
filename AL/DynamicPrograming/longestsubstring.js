/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = s.length;
  if (l === 0) return 0;
  if (l === 1) return 1;

  let starting_i = 0,
    maxLen = 0,
    i = 1;

  const m = {};
  m[s[0]] = 0;

  while (i < l) {
    if (!(s[i] in m)) m[s[i]] = i;
    else {
      if (m[s[i]] >= starting_i) {
        curlen = i - starting_i;
        if (curlen > maxLen) {
          maxLen = curlen;
        }
        starting_i = m[s[i]] + 1;
      }
      m[s[i]] = i;
    }

    i += 1;
  }
  if (i - starting_i > maxLen) {
    maxLen = i - starting_i;
  }
  return maxLen;
};
