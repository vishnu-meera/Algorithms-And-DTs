const maxArea = grid => {
  let max_area = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max_area = Math.max(max_area, getAreaOf(grid, i, j));
      }
    }
  }
  return max_area;
};

const getAreaOf = (grid, i, j) => {
  if (
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[0].length &&
    grid[i][j] === 1
  ) {
    grid[i][j] = 0;
    return (
      1 +
      getAreaOf(grid, i + 1, j) +
      getAreaOf(grid, i - 1, j) +
      getAreaOf(grid, i, j + 1) +
      getAreaOf(grid, i, j - 1)
    );
  }
  return 0;
};
