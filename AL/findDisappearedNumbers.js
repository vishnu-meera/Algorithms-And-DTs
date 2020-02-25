var findDisappearedNumbers = function(nums) {
  if (nums === null || nums.length === 0) return [];
  const arr = Array(nums.length + 1).fill(0),
    retarr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) retarr.push(i);
  }
  return retarr;
};
