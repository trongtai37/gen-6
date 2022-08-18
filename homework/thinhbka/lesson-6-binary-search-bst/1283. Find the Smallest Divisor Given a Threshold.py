import math
class Solution:
    def smallestDivisor(self, nums= [], threshold = 0):
        l = 1
        r = max(nums)
        ans = l
        def check(nums,threshold,divisor):
            result = sum([math.ceil(x*1./divisor) for x in nums])
            return result <= threshold
        while l <=r:
            m = (l+r)>>1
            if check(nums,threshold,m):
                ans = m
                r = m-1
            else:
                l = m+1
        return ans
        print(ans)
sol = Solution()
sol.smallestDivisor([44,22,33,11,1],5)
