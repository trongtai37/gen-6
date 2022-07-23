# Solution for https://leetcode.com/problems/subsets/

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def getBit(x, pos):
            return (x >> pos) & 1

        N = len(nums)
        ans = []

        for x in range(pow(2, N)):
            subset = []
            for i in range(N):
                if(getBit(x, i) == 1):
                    subset.append(nums[i])
            ans.append(subset)

        return ans