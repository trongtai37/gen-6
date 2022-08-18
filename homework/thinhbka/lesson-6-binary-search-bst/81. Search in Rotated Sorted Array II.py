class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        l = 0
        r = len(nums)-1
        if r == 0:
            return nums[0] == target
        while l<=r:
            while l<r and nums[l]==nums[l+1]:
                l+=1
            while l<r and nums[r] == nums[r-1]:
                r-=1
            m = (l+r)>>1
            if nums[m] == target:
                return True
            if nums[m]>=nums[0]:
                if nums[l]<= target < nums[m]:
                    r = m-1
                else:
                    l = m+1
            else:
                if nums[m] < target <= nums[r]:
                    l = m+1
                else:
                    r = m-1
        
        
        return False