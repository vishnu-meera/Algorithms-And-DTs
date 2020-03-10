const countAndSay = n => {
  let start = "1";
  let next = "";
  let count = 1;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < start.length; j++) {
      if (start[j] !== start[j + 1] || j === start.length - 1) {
        next += count + start[j];
        count = 1;
      } else count += 1;
    }
    start = next;
    next = "";
  }

  return start;
};
