
# Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
# Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
# Output: 6
# Explanation: [1,1,1,0,0,1,1,1,1,1,1]
# Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
# [1,1,1,0,0,0,1,1,1,1,0]
        #    i
class Solution:
    def longestOnes(self, nums, k) -> int:
        ans  = nums[0]
        left = 0
        cnt = k
        for i in range(len(nums)):
            if nums[i] == 1:
                ans = max(ans,i-left+1)
                print(ans)
            else:
                cnt-=1
                while nums[left]!=0:
                    left+=1
                left+=1
                cnt+=1
        return ans
Solution().longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)
print("")
Solution().longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3)