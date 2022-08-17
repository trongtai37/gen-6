class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        l, r = 1, max(nums)
        ans = l
        while l <= r:
            mid = (l + r) >>1
            if sum([(n - 1) // mid for n in nums]) > maxOperations: 
                ans = mid+1
                l = mid + 1
            else:
                r = mid-1
        return ans