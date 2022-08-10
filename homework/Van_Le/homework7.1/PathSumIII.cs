public class PathSumIII
{
    public static int retVal;
    public static Dictionary<long, int> dict;
    public int PathSum(TreeNode root, int targetSum) {
        retVal = 0;
        dict = new Dictionary<long, int>();
        dict[0] = 1;
        dfs(root, targetSum, 0);
        return retVal;
    }
    
    public void dfs(TreeNode root, int target, long currentSum){
        if(root == null)return;
        
        currentSum += root.val;
        if(dict.ContainsKey(currentSum - target)) {
            retVal += dict[currentSum - target];
        }
        
        if(!dict.ContainsKey(currentSum))
            dict[currentSum] = 0;
        dict[currentSum]++;
            
        dfs(root.left, target, currentSum);
        
        dfs(root.right, target, currentSum);
        
        dict[currentSum]--;
    }
}