# Kth Largest Element in an Array
# nums = [3,2,1,5,6,4], k = 2
# => [1,2,3,4,5,6], answer will be 5
# nums = [3,2,3,1,2,4,5,5,6], k = 4
# => [1,2,2,3,3,4,5,5,6], k = 4 , answer will be 4
from random import randint

def partition(arr,start,end):
    rdIdx = randint(start,end) 
    pivot = arr[rdIdx]
    arr[rdIdx],arr[end] = arr[end],arr[rdIdx]
    i = start -1
    for j in range(start,end):
        if arr[j] > pivot:
            i+=1
            arr[i],arr[j] = arr[j],arr[i]
    arr[i+1],arr[end] = arr[end],arr[i+1]
    return i+1        
def qSelect(arr,pos,start,end):
    if start<=end:
        pv = partition(arr,start,end)
        print(f"pivot {pv}, pos {pos}, arr {arr}")
        if pv == pos:
            return arr[pos]
        if pv > pos:
            return qSelect(arr,pos,start,pv-1)
        else: return qSelect(arr,pos,pv+1,end)       
class Solution:
    def findKthLargest(self, nums, k):
        # kth largest
        #   nth   n-1                             1
        # arr[0] arr[1] ..... arr[i].... arr[n-1]
        return qSelect(nums,k-1,0,len(nums)-1)
sol = Solution()
nums = [3,2,3,1,2,4,5,5,6]
sorted_arr = sorted(nums)
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6],1))
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6],2))
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6],3))
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6],4))
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6],5))
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6],6))