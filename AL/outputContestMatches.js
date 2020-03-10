const findContestMatches = n => {
  const draw = [];
  for (let i = 0; i < n; i++) draw[i] = i + 1;

  while (n > 1) {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      draw[i] = `(${draw[i]},${draw[n - i - 1]})`;
    }
    n = Math.floor(n / 2);
  }

  return draw[0];
};
