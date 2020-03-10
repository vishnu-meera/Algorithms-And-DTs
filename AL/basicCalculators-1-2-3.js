/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const numStack = [];
  const opStack = [];
  const map = { "+": 0, "-": 0, "*": 1, "/": 1, "(": 2, ")": -1 };
  let i = 0;

  s = s + "+";
  if (s[0] === "-") numStack.push(0);

  while (i < s.length) {
    if (Number.isInteger(parseInt(s[i]))) {
      let num = 0;
      while (i < s.length && Number.isInteger(parseInt(s[i]))) {
        num = num * 10 + (s[i].charAt(0) - "0");
        i++;
      }
      console.log(num);
      numStack.push(num);
    } else if (s[i] in map) {
      while (
        opStack.length !== 0 &&
        opStack[opStack.length - 1] !== "(" &&
        map[opStack[opStack.length - 1]] >= map[s[i]]
      ) {
        let num1 = numStack.pop();
        let num2 = numStack.pop();
        let op = opStack.pop();
        let res = Math.floor(getRes(op, num2, num1));
        console.log(": ", op, num2, num1, res);
        numStack.push(res);
      }

      if (s[i] === ")") {
        opStack.pop();
      } else {
        if (s[i] === "(" && s[i + 1] === "-") numStack.push(0);
        opStack.push(s[i]);
      }

      i++;
    } else i++;
  }
  console.log(numStack, opStack);
  return numStack.pop();
};

const getRes = (op, i, j) => {
  switch (op) {
    case "+":
      return i + j;
    case "-":
      return i - j;
    case "*":
      return i * j;
    case "/":
      return i / j;
  }
  return Number.MIN_VALUE;
};
