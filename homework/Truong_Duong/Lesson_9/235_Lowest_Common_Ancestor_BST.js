// Solution for https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

const lowestCommonAncestorUtil = function (root, smallerNode, biggerNode) {
  if (root.val === smallerNode.val || root.val === biggerNode.val) return root;
  if (root.val > smallerNode.val && root.val < biggerNode.val) return root;

  if(biggerNode.val < root.val) {
    return lowestCommonAncestorUtil(root.left, smallerNode, biggerNode);
  } else {
    return lowestCommonAncestorUtil(root.right, smallerNode, biggerNode);
  }
}


var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) {
    return lowestCommonAncestorUtil(root, q, p);
  } else {
    return lowestCommonAncestorUtil(root, p, q);
  }
};