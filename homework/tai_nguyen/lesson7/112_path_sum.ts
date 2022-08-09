class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isLeaf(node: TreeNode) {
  return node.left === null && node.right === null;
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;

  if (isLeaf(root)) {
    return targetSum === root.val;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
