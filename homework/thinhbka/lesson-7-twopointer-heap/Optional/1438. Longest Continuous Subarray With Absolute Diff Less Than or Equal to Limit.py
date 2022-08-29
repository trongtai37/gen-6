# Given an array of integers nums and an integer limit,
#  return the size of the longest non-empty subarray such that 
# the absolute difference between any two elements of this subarray is less than or equal to limit.
from sortedcontainers import SortedList
class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        sortedList = SortedList()
        ans,l =1,0
        for r in range(len(nums)):
            sortedList.add(nums[r])
            while sortedList[-1] - sortedList[0] > limit:
                sortedList.remove(nums[l])
                l+=1
            ans = max(ans,r+1-l)
        return ans
        #nlogn

from collections import deque   
class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        minQ = deque([])
        maxQ = deque([])
        startWindow = 0
        ans = 1
        for endWindow in range(len(nums)):
            entry = nums[endWindow]

            while maxQ and nums[maxQ[-1]] < entry:
                maxQ.pop()
            maxQ.append(endWindow)

            while minQ and nums[minQ[-1]] > entry:
                minQ.pop()
            minQ.append(endWindow)

            while nums[maxQ[0]]- nums[minQ[0]] > limit:
                if maxQ and maxQ[0] == startWindow:
                    maxQ.popleft()
                if minQ and minQ[0] == startWindow:
                    minQ.popleft()
                startWindow+=1
            ans = max(ans,endWindow+1-startWindow)
        return ans 