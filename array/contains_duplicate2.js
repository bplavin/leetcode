/**
 * 219. Contains Duplicate II
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = map.get(nums[i]);
    if (map.has(nums[i]) && Math.abs(value - j) <= k) return true;
    j++;
    map.set(nums[i], i);
  }
  return false;
};
