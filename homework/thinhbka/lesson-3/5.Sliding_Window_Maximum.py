# Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
# Output: [3,3,5,5,6,7]
from collections import deque

class Solution:
    def maxSlidingWindow(self, nums, k):
        n = len(nums)
        res = []
        de = deque([])
        for i in range(n):
            while de and nums[i]>nums[de[-1]]:
                de.pop()
            de.append(i)
            if de and de[-1]-de[0]==k:
                de.popleft()
            if i>=k-1:
                res.append(nums[de[0]])
        return res
sol = Solution()
print(sol.maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
print(sol.maxSlidingWindow([1],1))
print(sol.maxSlidingWindow([-1, 9, 8, 7, 6, 1, 9, 5, 0],3))
print(sol.maxSlidingWindow(
[7,2,4],2))