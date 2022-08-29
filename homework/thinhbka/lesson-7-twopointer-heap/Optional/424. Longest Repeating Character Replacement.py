class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        l = 0
        ans = 1
        maxF = 0
        for r in range(len(s)):
            c=s[r]
            count[c] = count.get(c,0)+1
            maxF = max(count[c],maxF)
            while (r-l+1) - maxF > k:
                count[s[l]]-=1
                # maxF-=1 why dont do this?
                l+=1
            ans = max(ans,r-l+1)
        return ans
Solution().characterReplacement("ABAB",2)
Solution().characterReplacement("AABABBA",1)