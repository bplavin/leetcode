// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true

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
 * @return {boolean}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isInRange(node, min, max) {
  if (node == null) return true;
  let currentIsOk = node.val < max && node.val > min;
  let leftSubTreeOk = isInRange(node.left, min, node.val);
  let rightSubTreeOk = isInRange(node.right, node.val, max);

  return currentIsOk && leftSubTreeOk && rightSubTreeOk;
}

var isValidBST = function (node) {
  if (node == null) return true;
  return (
    isInRange(node.left, Math.pow(-2, 31), node.val) &&
    isInRange(node.right, node.val, Math.pow(2, 31) - 1)
  );
};

let root = new TreeNode(10);
root.left = new TreeNode(8);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(9);
root.right = new TreeNode(16);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);
root.right.right.left = new TreeNode(19);

console.log(isValidBST(root));
