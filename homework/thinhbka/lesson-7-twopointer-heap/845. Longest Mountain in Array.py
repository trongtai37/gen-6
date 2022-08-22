class Solution:
    def longestMountain(self, arr) -> int:
        if len(arr)<3:
            return 0
        ans = 0
        leftSide = 0
        rightSide  =0
        while leftSide < len(arr) and rightSide < len(arr):
            if leftSide+1 < len(arr) and  arr[leftSide] < arr[leftSide+1]: #upside
                # print("detect moutain ")
                top = leftSide+1
                while top+1 < len(arr) and  arr[top] < arr[top+1]:#find top
                    top+=1
                rightSide = top+1
                while rightSide < len(arr) and arr[rightSide]<arr[rightSide-1]: #down side
                    rightSide+=1
                    ans =max(ans,rightSide-leftSide)
                
                leftSide = rightSide-1
            else:
                leftSide+=1
        return ans
print(Solution().longestMountain([2,1,4,7,3,2,5]))
print(Solution().longestMountain([2,2,2]))
print(Solution().longestMountain([48,62,39]))
print(Solution().longestMountain([1,2,3,4,5]))
print(Solution().longestMountain([875,884,239,731,723,685]))