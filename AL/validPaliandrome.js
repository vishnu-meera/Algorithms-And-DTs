/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) < 91) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) < 123)
    ) {
      arr.push(char.toLowerCase());
    }
    if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) < 58) {
      arr.push(char);
    }
  }
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i] !== arr[l - i - 1]) return false;
  }
  return true;
};
