class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        prS = [nums[0]]
        s = 1
        for i in range(0,len(nums)):
            if nums[i] == 0:
                prS.append(0)
                s = 1
            else:
                s = s*nums[i]
                prS.append(max(s,nums[i]))
        surS = [nums[len(nums)-1]]
        s = 1
        for i in range(len(nums)-1,-1,-1):
            if nums[i] == 0:
                surS.append(0)
                s = 1
            else:
                s = s*nums[i]
                surS.append(max(s,nums[i]))
        return max(max(prS),max(surS))