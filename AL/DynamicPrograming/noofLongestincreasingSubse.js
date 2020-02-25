/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let l = nums.length;
  let max_len = 1;
  let res = 1;
  let dp = Array(l).fill(1);
  let counts = Array(l).fill(1);

  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        } else if (dp[j] + 1 === dp[i]) {
          counts[i] += counts[j];
        }
      }
    }
    if (max_len < dp[i]) {
      max_len = dp[i];
      res = counts[i];
    } else if (max_len === dp[i]) {
      res += counts[i];
    }
  }

  return res;
};
