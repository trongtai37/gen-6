class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        left = 0
        right = 0
        ans = 0
        charSet = {}
        while right < len(s):
            if s[right] not in charSet:
                charSet[s[right]]=0
            charSet[s[right]] +=1
            while len(charSet) == 3:
                charSet[s[left]]-=1
                if charSet[s[left]] == 0:
                    del charSet[s[left]]
                left+=1
            ans = max(ans,right-left+1)
            right+=1
        return ans