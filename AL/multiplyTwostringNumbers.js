/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let l1 = num1.length;
  let l2 = num2.length;
  let ret = Array(l1 + l2).fill(0);
  let s = "";
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      let mul = (num1[i].charAt(0) - "0") * (num2[j].charAt(0) - "0");
      let sum = ret[i + j + 1] + mul;
      ret[i + j] += Math.floor(sum / 10);
      ret[i + j + 1] = sum % 10;
    }
  }

  for (const num of ret) {
    if (num === 0 && s.length === 0) continue;
    s += num;
  }

  if (s.length === 0) return "0";
  else return s;
};
