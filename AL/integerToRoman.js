/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
  let roman = "";
  if (num > 3999 || num < 1) return roman;

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let i = 0;
  while (num) {
    roman += numerals[i].repeat(Math.floor(num / values[i]));
    num = num % values[i];
    i += 1;
  }
  return roman;
};
