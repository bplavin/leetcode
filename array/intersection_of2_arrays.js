/**
 * 349. Intersection of Two Arrays
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Explanation: [4,9] is also accepted.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  const arr = [];

  for (let i = 0; i < nums2.length; i++) {
    set.add(nums2[i]);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (set.has(nums1[i])) {
      arr.push(nums1[i]);
      set.delete(nums1[i]);
    }
  }
  return arr;
};
