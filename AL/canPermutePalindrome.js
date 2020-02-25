/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  if (s === null || s.length === 0) return false;

  let dictionary = {};
  for (const c of s) {
    if (dictionary[c]) dictionary[c]++;
    else dictionary[c] = 1;
  }

  let count_even = 0;
  let count_odd = 0;
  for (const c in dictionary) {
    if (dictionary[c] % 2 === 0) count_even += 1;
    else count_odd += 1;

    if (count_odd > 1) return false;
  }
  return true;
};
