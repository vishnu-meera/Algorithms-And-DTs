const sortColors = nums => {
  let p = 0;
  let p1 = 0;
  let p2 = nums.length - 1;
  while (p <= p2) {
    if (nums[p] < 1) {
      [nums[p], nums[p1]] = [nums[p1], nums[p]];
      p += 1;
      p1 += 1;
    } else if (nums[p] > 1) {
      [nums[p], nums[p2]] = [nums[p2], nums[p]];
      p2 -= 1;
    } else {
      p += 1;
    }
  }
  return nums;
};
