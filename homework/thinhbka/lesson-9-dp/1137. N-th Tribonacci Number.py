class Solution:
    def tribonacci(self, n: int) -> int:
        if n <=2:
            return 0 if n == 0 else 1
        ans = [0]*(n+1)
        ans[0] = 0
        ans[1] = 1
        ans[2] = 1
        for i in range(3,n+1):
            ans[i] = ans[i-1]+ans[i-2]+ans[i-3]
        return ans[-1]