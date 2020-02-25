const manachersAlgorithm = (s, N) => {
  const str = getModifiedString(s, N);
  const len = 2 * N + 1;
  const P = Array(len).fill(0);
  let c = 0;
  let r = 0;
  let maxLen = 0;

  for (let i = 0; i < len; i++) {
    let i_dash = 2 * c - i;

    if (i < r) {
      P[i] = Math.min(r - i, P[i_dash]);
    }

    let a = i + (1 + P[i]);
    let b = i - (1 + P[i]);

    while (a < len && b >= 0 && str.charAt(a) === str.charAt(b)) {
      P[i]++;
      a++;
      b--;
    }

    if (i + P[i] > r) {
      c = i;
      r = i + P[i];

      if (P[i] > maxLen) {
        maxLen = P[i];
      }
    }
  }
  return maxLen;
};

const getModifiedString = (s, N) => {
  let sb = "";
  for (let i = 0; i < N; i++) {
    sb += "#";
    sb += s[i];
  }
  sb += "#";
  return sb;
};
