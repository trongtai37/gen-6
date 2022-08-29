class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = {}
        l = 0
        ans  = 0
        for r in range(len(s)):
            charSet[s[r]] = charSet.get(s[r],0)+1
            while charSet[s[r]] == 2:
                charSet[s[l]]-=1
                l+=1
            ans = max(ans,r-l+1)
        return ans