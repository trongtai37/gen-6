class Solution {
    public int singleNumber(int[] nums) {
        if(nums.length==1){
            return nums[0];
        }
        int singleNumber = nums[0];
        for(int i=1; i<nums.length; i++){
            singleNumber=singleNumber^nums[i];
        }
        return singleNumber;
    }
}