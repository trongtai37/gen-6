// Solution for https://leetcode.com/problems/two-sum-bsts/

var twoSumBSTs = function(root1, root2, target) {
  const dict = {};

  const root1Traversal = (root) => {
    if(root == null) return;
    dict[root.val] = 1;
    root1Traversal(root.left);
    root1Traversal(root.right);
  }

  root1Traversal(root1);

  const root2Traversal = (root) => {
    if(root == null) return false;
    if((target - root.val) in dict) return true;

    if(root2Traversal(root.left)) return true;
    if(root2Traversal(root.right)) return true;
    return false;
  }

  return root2Traversal(root2);
};