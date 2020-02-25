const longestPalianDromeSubsequence = s => {
  const n = s.length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }
    arr.push(temp);
  }
};

longestPalianDromeSubsequence("adbbca");
