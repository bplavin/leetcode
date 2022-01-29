// 1748. Sum of Unique Elements
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.

/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfUnique = function (nums) {
  //create the Set with unique numbers
  let unique = [...new Set(nums)];
  let map = new Map();
  let sum = 0;

  //check for repeated values
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], { value: 0 });
    } else {
      map.set(nums[i], { value: 1 });
    }
  }

  //if Map has a repeated value then minus it down
  for (let i = 0; i < unique.length; i++) {
    if (map.get(unique[i]).value == 1) {
      sum -= unique[i];
    }
    sum += unique[i];
  }

  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
