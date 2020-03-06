/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits === null || digits.length === 0) return;

  let l = digits.length;
  let carry = 0;

  for (let i = l - 1; i >= 0; i--) {
    let add = digits[i];

    if (i === l - 1) add = digits[i] + 1;

    add += carry;

    if (add >= 10) {
      digits[i] = add % 10;
      carry = Math.floor(add / 10);
    } else {
      digits[i] = add;
      carry = 0;
    }
  }

  if (carry > 0) digits.unshift(carry);

  return digits;
};
