// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

// // You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

// // horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
// // verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
// // Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

// Example 1:

// Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
// Output: 4
// Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */

var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let maxH = 0;
  let maxW = 0;

  horizontalCuts.sort();
  verticalCuts.sort();

  maxH = getMaxLength(h, horizontalCuts);
  maxW = getMaxLength(w, verticalCuts);

  return (maxH * maxW) % 1000000007;
};

function getMaxLength(maxLength, cuts) {
  let result;
  let first = Math.abs(0 - cuts[0]);
  let last = Math.abs(maxLength - cuts[cuts.length - 1]);

  for (let i = 0; i < cuts.length - 1; i++) {
    let temp = Math.abs(cuts[i] - cuts[i + 1]);
    result = Math.max(first, last, temp);
  }

  return result;
}

console.log(5, 4, [1, 2, 4], [1, 3]);
