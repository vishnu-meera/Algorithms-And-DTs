const longestCommonSubSequence = (colStr, rowStr) => {
  const lr = rowStr.length;
  const lc = colStr.length;

  const arr = Array(lr + 1)
    .fill(null)
    .map(() => Array(lc + 1).fill(null));

  for (let r = 0; r <= lr; r++) {
    for (let c = 0; c <= lc; c++) {
      if (r === 0 || c === 0) {
        arr[r][c] = 0;
      } else if (rowStr[r - 1] === colStr[c - 1]) {
        arr[r][c] = 1 + arr[r - 1][c - 1];
      } else {
        arr[r][c] = Math.max(arr[r - 1][c], arr[r][c - 1]);
      }
    }
  }

  let [i, j, lcs] = [lr, lc, ""];

  while (i > 0 && j > 0) {
    if (rowStr[i - 1] === colStr[j - 1]) {
      lcs = rowStr[i - 1] + lcs;
      i--;
      j--;
    } else if (arr[i - 1][j] > arr[i][j - 1]) i--;
    else j--;
  }

  return lcs;
};

console.log(longestCommonSubSequence("MZJAWXU", "XMJYAUZ"));
