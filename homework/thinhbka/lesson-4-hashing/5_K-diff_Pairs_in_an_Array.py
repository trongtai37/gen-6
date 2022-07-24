

# Method 1: Sort and binary search. Take O(nlogn) runtime
def bSearch(target,arr,start,end):
    while start <=end:
        mid = (start+end)>>1
        if arr[mid] == target:
            return mid
        if arr[mid] > target:
            end = mid-1
        else:
            start = mid+1
    return -1
class Solution:
    def findPairs(self, nums, k):
        nums.sort()
        ans = {}
        for i in range(len(nums)):
            val = nums[i]
            target = k+val
            j = bSearch(target,nums,i+1,len(nums)-1)
            if j!=-1 and (nums[i],nums[j]) not in ans:
                ans[(nums[i],nums[j])]=0
        return len(ans)


# Method 2: Using Dictionary. O(n) run time and space
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        cnt = {}
        ans = {}
        for e in nums:
            if e-k in cnt:
                if (e-k,e) not in ans:
                    ans[(e-k,e)] = True
            if e+k in cnt:
                if (e,e+k) not in ans:
                    ans[(e,e+k)] = True
            if e not in cnt:
                cnt[e] = True
        return len(ans)
                
sol = Solution()
arr = [3,1,4,1,5]
k = 2
print(sol.findPairs(arr,k))