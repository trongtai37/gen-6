class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        count = {}
        ans = 0
        l = 0
        for r in range(len(s)):
            count[s[r]] = count.get(s[r],0)+1
            while len(count)>k:
                if count[s[l]] == 1:
                    del count[s[l]]
                l+=1
            ans = max(ans,r+1-l)
        return ans
                
