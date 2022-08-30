class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        l = 0
        ans = 0
        for r in range(len(nums)):
            entry = nums[r]
            if entry-nums[l]>k:
                l = r
                ans+=1
        return ans+1