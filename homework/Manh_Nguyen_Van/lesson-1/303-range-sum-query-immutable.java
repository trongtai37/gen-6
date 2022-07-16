class NumArray {
    
    private int[] prefixSums;

    public NumArray(int[] nums) {
        int inputSize = nums.length;
        prefixSums = new int[inputSize+1];
        prefixSums[1] = nums[0];
        for(int i=1; i< inputSize; i++){
            prefixSums[i+1] = prefixSums[i] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        return prefixSums[right+1]- prefixSums[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */