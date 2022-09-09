class Solution:
    def rob(self, nums):
        if len(nums)<=2:
            return max(nums)
        nums[1] = max(nums[1],nums[0])
        for i in range(2,len(nums)):
            nums[i] = max(nums[i-1],nums[i-2]+nums[i])
        return nums[-1]

