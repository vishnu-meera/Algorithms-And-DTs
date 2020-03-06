/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1]
];

const gameOfLife = board => {
  if (board === null || board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let lives = count(board, i, j);
      if (board[i][j] === 0 && lives === 3) board[i][j] = -1;
      if (board[i][j] === 1 && (lives < 2 || lives > 3)) board[i][j] = 2;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === -1) board[i][j] = 1;
      if (board[i][j] === 2) board[i][j] = 0;
    }
  }
};

const count = (board, r, c) => {
  let res = 0;
  for (const d of direction) {
    let nr = r + d[0];
    let nc = c + d[1];

    if (
      nr < board.length &&
      nc < board[0].length &&
      nc >= 0 &&
      nr >= 0 &&
      (board[nr][nc] === 1 || board[nr][nc] === 2)
    ) {
      res += 1;
    }
  }
  return res;
};
