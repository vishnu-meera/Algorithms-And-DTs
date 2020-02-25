// To understand this solution, you just need to ask yourself these question.
// Assume the distance from head to the start of the loop is x1
// the distance from the start of the loop to the point fast and slow meet is x2
// the distance from the point fast and slow meet to the start of the loop is x3

//     What is the distance fast moved? 2. What is the distance slow moved? 3. And their relationship?

//     x1 + x2 + x3 + x2
//     x1 + x2
//     x1 + x2 + x3 + x2 = 2 (x1 + x2)

// Thus x1 = x3, that's the reason we reset fast to be 0.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  if (nums.length > 1) {
    let slow = nums[0]; //1
    let fast = nums[nums[0]]; //3

    while (slow !== fast) {
      console.log(slow, fast);
      slow = nums[slow]; //3//2//4
      fast = nums[nums[fast]]; //4 //4//4
    }

    console.log("******");
    fast = 0;

    while (slow !== fast) {
      console.log(slow, fast);
      slow = nums[slow];
      fast = nums[fast];
    }
    return slow;
  }

  return -1;
};
