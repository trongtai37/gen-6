# Bit manipulation
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        ans = []
        n = len(nums)
        for i in range(0,1<<n):
            tmp = []
            for j in range(n):
                if (i>>j) & 1 !=0:
                    tmp.append(nums[j])
            ans.append(tmp)
        return ans 

# Backtracking
class Solution:
    def back_track(self,index,nums,tmp):
        if index == len(nums):
            self.ans.append(tmp.copy())
            tmp = []
            return
        tmp.append(nums[index])
        self.back_track(index+1,nums,tmp)
        tmp.pop()
        self.back_track(index+1,nums,tmp)
    def subsets(self, nums: List[int]) -> List[List[int]]:
        self.visit = [False]*len(nums)
        self.ans = []
        self.tmp = []
        self.back_track(0,nums,self.tmp)
        return self.ans        