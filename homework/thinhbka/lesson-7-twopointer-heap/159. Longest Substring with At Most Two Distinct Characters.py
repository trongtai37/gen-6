class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        l = 0
        ans = 0
        charSet = {}
        for r in range(len(s)):
            charSet[s[r]] = charSet.get(s[r],0)+1
            while len(charSet) == 3:
                charSet[s[l]]-=1
                if charSet[s[l]] == 0:
                    del charSet[s[l]]
                l+=1
            ans = max(ans,r-l+1)
        return ans