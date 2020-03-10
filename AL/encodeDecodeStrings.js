/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let encode = "";
  for (const str of strs) encode += str.length + "/" + str;
  return encode;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  let i = 0;
  let res = [];
  while (i < s.length) {
    let slash = s.indexOf("/", i);
    let size = parseInt(s.substring(i, slash));
    i = slash + size + 1;
    res.push(s.substring(slash + 1, i));
  }
  return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
