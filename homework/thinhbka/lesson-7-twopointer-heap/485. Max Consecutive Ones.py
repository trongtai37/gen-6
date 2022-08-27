class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        tmp = ans = 0
        for e in nums:
            if e == 1:
                tmp+=1
            else:
                ans = max(ans,tmp)
                tmp = 0
        return max(ans,tmp)