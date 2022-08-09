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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];

  const nodeValList: number[] = [];
  const pathList: number[][] = [];
  return recursivePathSum(root, targetSum, nodeValList, pathList);
}

function recursivePathSum(
  root: TreeNode | null,
  targetSum: number,
  nodeValList: number[],
  pathList: number[][]
): number[][] {
  if (!root) return pathList;

  nodeValList.push(root.val);

  if (!root.left && !root.right && root.val === targetSum) {
    pathList.push([...nodeValList]);
  }

  recursivePathSum(root.left, targetSum - root.val, nodeValList, pathList);
  recursivePathSum(root.right, targetSum - root.val, nodeValList, pathList);

  nodeValList.pop();

  return pathList;
}
