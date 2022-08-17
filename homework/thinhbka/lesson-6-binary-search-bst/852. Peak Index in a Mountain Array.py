class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:  
        l = 0
        r = len(arr)
        while l <= r:
            i = (l+r)>>1
            if arr[i]<arr[i+1]:
                l = i+1
            else:
                r = i-1
        return l