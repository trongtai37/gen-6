class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0
        for i in range(0,len(nums)):
            if nums[k] < nums[i]:
                k+=1
                nums[k],nums[i] = nums[i],nums[k]
        return k+1
print(Solution().removeDuplicates( [1,1,2]))
print(Solution().removeDuplicates( [0,0,1,1,1,2,2,3,3,4]))

print(Solution().removeDuplicates( [0,1,1,1,2,2,3,3,4]))
print(Solution().removeDuplicates( [0,1,1,1,2,3,3,4]))
print(Solution().removeDuplicates( [0,1,2,3,3,4]))