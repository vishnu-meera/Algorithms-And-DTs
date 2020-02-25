/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = getSquareSumofDigits(n);
  let fast = getSquareSumofDigits(n);
  fast = getSquareSumofDigits(fast);

  while (slow !== fast) {
    slow = getSquareSumofDigits(slow);
    fast = getSquareSumofDigits(fast);
    fast = getSquareSumofDigits(fast);
  }

  if (slow === 1) return 1;
  else return 0;
};

const getSquareSumofDigits = n => {
  let sum = 0,
    tmp;

  while (n) {
    tmp = n % 10;
    sum += tmp * tmp;
    n = Math.floor(n / 10);
  }
  console.log(sum);
  return sum;
};
