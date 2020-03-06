/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) return;
  if (n === 1) return [[1]];

  const matrix = [...Array(n)].map(k => Array(n).fill(0));
  let count = 1;
  //
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  //
  while (count <= n * n) {
    for (let i = left; i <= right && count <= n * n; i++) {
      matrix[top][i] = count;
      count++;
    }
    top++;
    for (let i = top; i <= bottom && count <= n * n; i++) {
      matrix[i][right] = count;
      count++;
    }
    right--;
    for (let i = right; i >= left && count <= n * n; i--) {
      matrix[bottom][i] = count;
      count++;
    }
    bottom--;
    for (let i = bottom; i >= top && count <= n * n; i--) {
      matrix[i][left] = count;
      count++;
    }
    left++;
  }
  return matrix;
};
