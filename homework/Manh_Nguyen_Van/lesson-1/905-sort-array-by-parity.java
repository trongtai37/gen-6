class Solution {
    
    public int[] sortArrayByParity(int[] nums) {
        int n = nums.length;
        int i=0;
        int j=n-1;

        while (i<j){
            while(i<j && nums[i] % 2 == 0) i++;
            while(j>i && nums[j] % 2 != 0) j--;
            
            if(i>=j){
                return nums;
            }
            swap(i, j, nums);
        }

        return nums;
    }
    
    private void swap(int x, int y, int[] nums){
        if(x==y) return;
        nums[x] = nums[x] + nums[y];
        nums[y] = nums[x] - nums[y];
        nums[x] = nums[x] - nums[y];
    }
}