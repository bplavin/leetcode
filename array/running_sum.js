/**
 * 1480. Running Sum of 1d Array
 * 
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  let sum = [];
  let number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum.push((number += nums[i]));
  }
  return sum;
};
