const lengthOfLIS = nums => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  const length = nums.length;
  const lis = Array(length).fill(1);
  let maxLisNo = 0;
  let maxIndex = 0;
  const subSe = Array(length).fill(0);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (lis[j] + 1 >= lis[i]) {
          lis[i] = lis[j] + 1;
          subSe[i] = j;
          if (lis[j] + 1 > maxLisNo) {
            maxLisNo = lis[j] + 1;
            maxIndex = i;
          }
        }
      }
      maxLisNo = Math.max(lis[i], maxLisNo);
    }
  }
  console.log(lis);
  console.log(subSe);
  console.log(maxLisNo, maxIndex);
  const returnArr = [];
  let i = maxLisNo;
  while (i > 0) {
    returnArr.push(nums[maxIndex]);
    maxIndex = subSe[maxIndex];
    // console.log(maxIndex);
    i--;
  }

  console.log(returnArr);
};

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 4, 12, 2, 10, 6, 9, 13, 3, 11, 7, 15]));
// console.log(lengthOfLIS([2, 2]));
