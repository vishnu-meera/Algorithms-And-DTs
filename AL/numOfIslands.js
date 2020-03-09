/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        if (dfs(grid, i, j) >= 1) count++;
      }
    }
  }

  return count;
};

const dfs = (grid, i, j) => {
  if (
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[0].length &&
    grid[i][j] === "1"
  ) {
    grid[i][j] = "#";
    return (
      1 +
      dfs(grid, i + 1, j) +
      dfs(grid, i - 1, j) +
      dfs(grid, i, j + 1) +
      dfs(grid, i, j - 1)
    );
  }
  return 0;
};
