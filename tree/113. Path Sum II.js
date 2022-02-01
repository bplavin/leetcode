// 113. Path Sum II

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22

// Input: root = [1,2,3], targetSum = 5
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {number[][]}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var pathSum = function (node, targetSum) {
  let results = [];

  dfs(node, targetSum, 0, [], results);

  return results;
};

let dfs = (node, targetSum, sum, rootToLeaf, results) => {
  if (!node) return;

  //Add each value to the shallow arr and sum
  sum += node.val;
  rootToLeaf.push(node.val);
  //check if node is a leaf
  if (!node.left && !node.right) {
    if (sum == targetSum) {
      results.push([...rootToLeaf]);
    }
  } else {
    dfs(node.left, targetSum, sum, rootToLeaf, results);
    dfs(node.right, targetSum, sum, rootToLeaf, results);
  }
  rootToLeaf.pop();
};

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.right = new TreeNode(2);
root.left.left.left = new TreeNode(7);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

console.log(pathSum(root, 22));
