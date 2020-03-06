/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  if (arr === null || arr.length === 0) return [];
  arr.sort((a, b) => a - b);
  let least_diff = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    least_diff = Math.min(Math.abs(arr[i + 1] - arr[i]), least_diff);
  }
  console.log(least_diff);
  let ret = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (least_diff === Math.abs(arr[i + 1] - arr[i]))
      ret.push([arr[i], arr[i + 1]]);
  }
  return ret;
};
