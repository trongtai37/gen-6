class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ans = 0
        for e in nums:
            ans = ans ^ e
        return ans