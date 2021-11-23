/**
 * 268. Missing Number
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * 
 * Example:
 * Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Solved with the sum of Arithmetic progression (line 2)
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  return sum - nums.reduce((cur, next) => cur + next);
};
