const snakesAndLadders = board => {
  if (board === null || board.length === 0) return -1;
  const N = board.length;
  const q = [1];
  const visited = { "1": 0 };

  while (q.length !== 0) {
    const n = q.shift();
    if (n === N * N) return visited[n];
    for (let i = n + 1; i <= Math.min(n + 6, N * N); i++) {
      const [row, col] = getLocation(i, N);
      const next = board[row][col] === -1 ? i : board[row][col];
      if (visited[next] === undefined) {
        q.push(next);
        visited[next] = v[n] + 1;
      }
    }
  }

  return -1;
};

const getLocation = (i, N) => {
  let row = Math.floor((i - i) / N);
  let col = (i - 1) % N;
  col = row % 2 === 1 ? N - col - 1 : col;
  row = N - row - 1;
  return [row, col];
};
