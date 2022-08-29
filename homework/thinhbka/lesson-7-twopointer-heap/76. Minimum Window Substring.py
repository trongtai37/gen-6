from collections import Counter
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        counter_t,window = Counter(t),{} #O(t)
        left = 0
        res,resLen = [-1,-1],float("infinity")
        have,need = 0,len(counter_t)
        for r in range(len(s)):
            c = s[r]
            window[c] = window.get(c,0)+1
            if c in counter_t and window[c] == counter_t[c]:
                have +=1
            while have == need:
                if r-left+1 < resLen:
                    resLen = r+1-left
                    res = [left,r+1] 
                window[s[left]]-=1
                if s[left] in counter_t and window[s[left]] < counter_t[s[left]]:
                    have-=1
                left+=1
        if res[0] == -1:
            return ""
        return s[res[0]:res[1]]
Solution().minWindow("acbbaca","aba")
Solution().minWindow("aa","aa")
Solution().minWindow("ADOBECODEBANC","ABC")
#Time complexity: O(|t|+|s|)