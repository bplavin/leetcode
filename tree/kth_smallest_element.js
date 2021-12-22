// 230. Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let counter = 0;
let element;

var kthSmallest = function (root, k) {
  if (root != null) {
    kthSmallest(root.left, k);
    counter++;
    if (counter === k) {
      element = root.val;
      return element;
    }
    kthSmallest(root.righ, k);
  }
  return element;
};

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.righ = new TreeNode(4);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(1);
root.right = new TreeNode(6);

console.log(kthSmallest(root, 3));
