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

var maxArea = function (h, w, hc, vc) {
  hc.sort((a, b) => a - b);
  vc.sort((a, b) => a - b);
  let maxh = Math.max(hc[0], h - hc[hc.length - 1]),
    maxv = Math.max(vc[0], w - vc[vc.length - 1]);
  for (let i = 1; i < hc.length; i++) maxh = Math.max(maxh, hc[i] - hc[i - 1]);
  for (let i = 1; i < vc.length; i++) maxv = Math.max(maxv, vc[i] - vc[i - 1]);
  return (BigInt(maxh) * BigInt(maxv)) % 1000000007n;
};
