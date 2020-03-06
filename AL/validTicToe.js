/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  if (board === null || board.length === 0) return false;

  let x_count = 0;
  let o_count = 0;

  for (let i = 0; i < board.length; i++) {
    let win_c = [];
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "X") {
        x_count++;
      }
      if (board[i][j] === "O") {
        o_count++;
      }
    }
  }

  if (x_count - o_count > 1 || o_count > x_count) return false;

  if (checkWin(board, "O")) {
    if (checkWin(board, "X")) {
      return false;
    }
    return o_count === x_count;
  }

  if (checkWin(board, "X") && o_count + 1 !== x_count) {
    return false;
  }

  return true;
};

const checkWin = (board, player) => {
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    )
      return true;
  }
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    )
      return true;
  }
  if (
    (board[1][1] === player &&
      board[0][0] === player &&
      board[2][2] === player) ||
    (board[2][0] === player && board[1][1] === player && board[0][2] === player)
  )
    return true;

  return false;
};
