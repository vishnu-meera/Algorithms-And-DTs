const mergeIntervals = inetrvals => {
  if (inetrvals === null) return inetrvals;
  if (inetrvals.length < 2) return inetrvals;

  for (let i = 1; i < inetrvals.length; i++) {
    let curr = array[i];
    let prev = array[i - 1];
    if (curr[0] <= prev[1]) {
      inetrvals[i] = [Math.min(curr[0], prev[0]), Math.max(curr[1], prev[1])];
      inetrvals.splice(i - 1, 1);
      i -= 1;
    }
  }

  return inetrvals;
};
