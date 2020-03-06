/**
 * @param {string} s
 * @return {number}
 */
const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
var romanToInt = function(s) {
  let intgr = 0;
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < s.length; ) {
    num1 = numerals[s[i]] ? numerals[s[i]] : 0;
    num2 = numerals[s[i] + s[i + 1]] ? numerals[s[i] + s[i + 1]] : 0;
    if (num1 > num2) {
      intgr += num1;
      i += 1;
    } else {
      intgr += num2;
      i += 2;
    }
  }
  return intgr;
};
