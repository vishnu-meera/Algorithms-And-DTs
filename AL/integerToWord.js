/**
 * @param {number} num
 * @return {string}
 */

const base = { 0: "", 1: "Thousand", 2: "Million", 3: "Billion" };

const tensArr = {
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
  100: "Hundred"
};

const onesArr = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine"
};

const numberToWords = number => {
  if (number === 0 || number.toString().length === 0) return "Zero";

  let ret = "";
  const q = [];
  while (number !== 0) {
    q.push(number % 1000);
    number = Math.floor(number / 1000);
  }

  for (let i = q.length - 1; i >= 0; i--) {
    let trio = q[i];
    if (trio !== 0) {
      ret = ret + getTrioToString(trio) + " ";
      ret = ret + base[i] + " ";
    }
  }
  return ret.trim();
};

const getTrioToString = number => {
  let ret = "";
  const ones = number % 10;
  const tens = Math.floor(number / 10) % 10;
  const hunderds = Math.floor(number / 100) % 10;

  if (hunderds !== 0) ret = ret + onesArr[hunderds] + " Hundred ";

  if (tens === 1) {
    let temp = tens * 10 + ones;
    ret = ret + tensArr[temp] + " ";
  } else if (tens > 1) {
    let temp = tens * 10;
    ret = ret + tensArr[temp] + " ";
  }

  if (tens !== 1 && ones !== 0) {
    ret = ret + onesArr[ones] + " ";
  }

  return ret.trim();
};
console.log(numberToWords(1000000));
