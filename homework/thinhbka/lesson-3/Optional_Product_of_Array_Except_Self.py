# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]

# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]
# You must write an algorithm that runs in O(n) time and without using the division operation.

#Method1: Time & Space O(n)
#Using prefixSum method
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        L = [1]*n
        R = [1]*n
        ans = [1]*n
        for i in range(1,n):
            L[i] = L[i-1]*nums[i-1]
        for i in range(n-2,-1,-1):
            R[i] = R[i+1]*nums[i+1]
        for i in range(n):
            ans[i] = L[i]*R[i]
        return ans


#Method2: Time O(n) and const extra space
class Solution:
    def productExceptSelf(self,nums):
        n = len(nums)
        ans = [1]*n
        for i in range(1,n):
            ans[i] = ans[i-1]*nums[i-1]
        R = 1
        for i in range(n-1,-1,-1):
            ans[i] = ans[i]*R
            R = R*nums[i]
        return ans