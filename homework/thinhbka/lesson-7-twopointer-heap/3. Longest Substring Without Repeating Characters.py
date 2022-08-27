class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = {}
        left = 0
        ans  = 0
        right = 0
        while right < len(s):
            if s[right] not in charSet:
                charSet[s[right]] = 0
            charSet[s[right]]+=1
            while charSet[s[right]] == 2:
                charSet[s[left]]-=1
                left+=1
            ans = max(ans,right-left+1)
            right+=1
        return ans