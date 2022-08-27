class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        nums.sort()
        l = 0
        r = len(nums)-1
        ans = -1
        while l < r:
            value = nums[l]+nums[r]
            if value >= k:
                r-=1
            else:
                l+=1
                ans = max(ans,value)
        return ans