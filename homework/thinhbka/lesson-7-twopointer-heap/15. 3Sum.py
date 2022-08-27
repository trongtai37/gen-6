class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums)<3:
            return []
        nums.sort()
        result = []
        for idx,num in enumerate(nums):
            if idx>0 and  num == nums[idx-1]:
                continue
            else:
                L = idx+1
                R = len(nums)-1
                
                while R>L:
                    if nums[L]+nums[R] >0-num:
                        R-=1
                    elif nums[L]+nums[R] <0-num:
                        L+=1
                    else:
                        result.append([num,nums[L],nums[R]])
                        L+=1
                        while nums[L] == nums[L-1] and L<R:
                            L+=1
        return result      