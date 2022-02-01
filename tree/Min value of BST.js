class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let min = 99999999999999;

let dfs = (node) => {
  if (node == null) return;
  min = Math.min(node.val, min);
  dfs(node.left, min);
  dfs(node.right, min);

  return min;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(dfs(root));
