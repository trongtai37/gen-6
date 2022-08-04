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

function longestZigZag(root: TreeNode | null): number {
  let res = 0;

  function dfs(root: TreeNode | null) {
    if (!root) return [-1, -1];

    const left = dfs(root.left);
    const right = dfs(root.right);
    const pathLeft = left[1] + 1;
    const pathRight = right[0] + 1;

    res = Math.max(res, pathLeft || res, pathRight);

    return [pathLeft, pathRight];
  }
  dfs(root);

  return res;
}

function longestZigZag1(root: TreeNode | null): number {
  let res = 0;

  function dfs(root: TreeNode | null, direction: string, step: number) {
    if (!root) return;

    res = Math.max(res, step);

    if (direction === "left") {
      dfs(root.left, "left", 1);
      dfs(root.right, "right", step + 1);
    } else {
      dfs(root.right, "right", 1);
      dfs(root.left, "left", step + 1);
    }
  }

  dfs(root, "left", 0);
  dfs(root, "right", 0);

  return res;
}
