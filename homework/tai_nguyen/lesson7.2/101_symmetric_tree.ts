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

type ElementType = TreeNode | null;

function isSymmetricRow(nodes: ElementType[]): boolean {
  let l = 0,
    r = nodes.length - 1;
  while (l < r) {
    if (nodes[l]?.val !== nodes[r]?.val) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

function nextLevel(nodes: ElementType[]): ElementType[] {
  const res: ElementType[] = [];
  for (const node of nodes) {
    if (node) {
      res.push(node.left);
      res.push(node.right);
    }
  }

  return res;
}

function isSymmetric(root: TreeNode | null): boolean {
  let queue = [root];
  while (queue.length) {
    if (!isSymmetricRow(queue)) {
      return false;
    }

    queue = nextLevel(queue);
  }

  return true;
}
