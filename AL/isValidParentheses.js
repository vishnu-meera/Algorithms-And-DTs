/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (const c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else if (c === ")" || c === "}" || c === "]") {
      if (stack.length === 0) return false;
      let open = stack.pop();
      switch (c) {
        case ")":
          if (open !== "(") return false;
          break;
        case "}":
          if (open !== "{") return false;
          break;
        case "]":
          if (open !== "[") return false;
          break;
      }
    }
  }

  return stack.length === 0;
};
