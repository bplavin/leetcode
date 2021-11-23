/**
852. Peak Index in a Mountain Array

Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

 * @param {number[]} arr
 * @return {number}
 */

// O(n) solution

var peakIndexInMountainArray = function (arr) {
  let x = Math.max(...arr);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return (index = i);
  }
  return index;
};
