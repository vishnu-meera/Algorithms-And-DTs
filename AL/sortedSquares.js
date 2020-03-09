const sortedSquares = A => {
  if (A === null) return;
  const n = A.length;
  const result = Array(n);
  let i = 0;
  let j = n - 1;
  for (let p = n - 1; p >= 0; p--) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[p] = A[i] * A[i];
      i++;
    } else {
      result[p] = A[j] * A[j];
      j++;
    }
  }
  return result;
};
