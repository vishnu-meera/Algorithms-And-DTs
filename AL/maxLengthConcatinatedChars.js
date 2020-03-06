// /**
//  * @param {string[]} arr
//  * @return {number}
//  */
var maxLength = function(arr) {
  let pathArr = [""];
  let maxLen = 0;

  for (const s of arr) {
    for (const path of pathArr) {
      let t = s + path;
      let unique = new Set(t);
      if (t.length === [...unique].length) {
        pathArr.push(t);
        maxLen = Math.max(maxLen, t.length);
      }
    }
  }
  return maxLen;
};
