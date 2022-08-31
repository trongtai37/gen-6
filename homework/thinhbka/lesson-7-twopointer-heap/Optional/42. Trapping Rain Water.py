#prefix Sum 
# O(n) time and space
class Solution:
    def trap(self, h: List[int]) -> int:
        L,L[0] = [0]*len(h),h[0]
        for i in range(1,len(h)):
            L[i] = max(L[i-1],h[i])
        
        R,R[-1] = [0]*len(h),h[-1]
        for i in range(len(h)-2,-1,-1):
            R[i] = max(R[i+1],h[i])
        # print(L,R)
        ans = 0
        for i in range(len(h)):
            ans+= max(0,min(L[i],R[i])-h[i])
        return ans
Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1])


# Two pointer:
# O(n) of time, O(1) extra space
class Solution:
    def trap(self, h: List[int]) -> int:
        L,maxL = 0,h[0]
        R,maxR = len(h)-1,h[-1]
        ans = 0
        while L<R:
            if maxL <= maxR:
                if maxL <= h[L+1]:
                    maxL = h[L+1]
                else:
                    ans+=maxL-h[L+1]
                L+=1
            else:
                if maxR <= h[R-1]:
                    maxR = h[R-1]
                else:
                    ans+=maxR-h[R-1]
                R-=1
        return ans