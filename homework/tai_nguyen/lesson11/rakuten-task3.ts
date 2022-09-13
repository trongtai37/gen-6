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

function solution(root: TreeNode): number {
  const set = new Set();
  let res = -Infinity;

  function dfs(node: TreeNode) {
    set.add(node.val);
    res = Math.max(res, set.size);

    if (node.left?.val && !set.has(node.left.val)) {
      dfs(node.left);
    }

    if (node.right?.val && !set.has(node.right.val)) {
      dfs(node.right);
    }

    set.delete(node.val);
  }

  dfs(root);

  return res;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(6);
root.left.left.left = new TreeNode(2);

root.right = new TreeNode(3);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(1);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(6);

console.log(solution(root)); // 3
