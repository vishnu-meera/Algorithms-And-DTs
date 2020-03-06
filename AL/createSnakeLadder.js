const SnakeLadder = () => {
  const board = [...Array(10)].map(k => Array(10).fill(0));
  let count = 1;
  let bottom = 9;
  let left = 0;
  let right = 9;

  while (count <= 100) {
    for (let i = left; i <= right; i++) {
      board[bottom][i] = count;
      count++;
    }
    bottom--;
    for (let i = right; i >= left; i--) {
      board[bottom][i] = count;
      count++;
    }
    bottom--;
  }
  return board;
};

console.log(SnakeLadder());
