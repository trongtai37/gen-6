/**
 * @link https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;

  const rootValue = preorder[0];
  if (inorder.length === 1) return new TreeNode(rootValue);

  const rootInorderIndex = inorder.findIndex((item) => item === rootValue);
  const leftPart = inorder.slice(0, rootInorderIndex);
  const rightPart = inorder.slice(rootInorderIndex + 1);

  const rootNode = new TreeNode(rootValue);
  rootNode.left = buildTree(
    preorder.slice(preorder.findIndex((item) => leftPart.includes(item))),
    leftPart
  );
  rootNode.right = buildTree(
    preorder.slice(preorder.findIndex((item) => rightPart.includes(item))),
    rightPart
  );

  return rootNode;
}
