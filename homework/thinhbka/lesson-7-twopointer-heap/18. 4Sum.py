#Method1: n^3 logn
# def bSearch(ele,arr,start,end):
#     while start<=end:
#         mid = (start+end)>>1
#         mem = arr[mid]
#         if mem == ele:
#             return True
#         if mem > ele:
#             end = mid-1
#         else:
#             start = mid+1
#     return False
# class Solution:
#     def fourSum(self, nums, target):
#         n= len(nums)
#         nums.sort()
#         # print("hash table ",sum12)
#         ans = {}
#         for a in range(n):
#             for b in range(a+1,n):
#                 for c in range(b+1,n):
#                     s = target-(nums[a]+nums[b]+nums[c])
#                     if bSearch(s,nums,c+1,n-1):
#                         if (nums[a],nums[b],nums[c],s) not in ans:
#                             ans[(nums[a],nums[b],nums[c],s)] = True
#         return list(ans.keys())
#Method 2: n^3 time and O(n) space
class Solution:
    def fourSum(self, nums, target):
        n= len(nums)
        nums.sort()
        ans = set()
        def find(nums,fist,second,target):
            left = second+1
            right = len(nums)-1
            target = target - nums[fist]-nums[second] 
            while left < right:
                if nums[left]+nums[right] == target:
                    ans.add((nums[fist],nums[second],nums[left],nums[right]))
                    left+=1
                    right-=1
                elif nums[left]+nums[right]<target:
                    left+=1
                else:
                    right-=1
        for a in range(n):
            for b in range(a+1,n):
                find(nums,a,b,target)
        return list(list(x) for x in ans)
Solution().fourSum([1,0,-1,0,-2,2],
0)
Solution().fourSum([2,2,2,2,2],
8)