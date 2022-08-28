// Solution for https://leetcode.com/problems/delete-node-in-a-bst/

var findRightMostNode = (node) => {
  if (node.right === null) return node;
  return findRightMostNode(node.right);
}

var deleteNode = function (root, key) {
  if (root == null) return null;
  
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;

    const rightMostNode = findRightMostNode(root.left);
      
    root.val = rightMostNode.val;
    root.left = deleteNode(root.left, root.val);
  }

  return root;
};