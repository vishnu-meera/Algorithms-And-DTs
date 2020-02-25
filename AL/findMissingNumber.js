/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  let i = 0,
    k = 1;
  while (i < n) {
    if (nums[i] > 0 && nums[i] < n && nums[nums[i]] !== nums[i])
      [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    else i += 1;
  }

  while (k < n && nums[k] === k) k++;

  if (n === 0 || k < n) return k;
  else return nums[0] === k ? k + 1 : k;
};
