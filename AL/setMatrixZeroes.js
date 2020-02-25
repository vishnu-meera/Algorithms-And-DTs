/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];

// console.log(matrix2);

const setZeroes = m => {
  const rowAr = Array(m.length).fill(false);
  const columnAr = Array(m[0].length).fill(false);
  let count = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      count += 1;
      if (m[i][j] === 0) {
        columnAr[j] = true;
        rowAr[i] = true;
      }
    }
  }
  console.log("Time 1 : ", count);

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (rowAr[i] || columnAr[j]) {
        m[i][j] = 0;
      }
    }
  }
};
setZeroes(matrix2);

// console.log(matrix2);
