class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        r = len(nums)-1
        ans = -1e6
        if nums[l] <= nums[r]:return nums[l]
        while l <=r:
            m = (l+r)>>1
            if nums[m] >=nums[0]:
                l = m+1
            else:
                ans = nums[m]
                r = m-1
        return ans
            