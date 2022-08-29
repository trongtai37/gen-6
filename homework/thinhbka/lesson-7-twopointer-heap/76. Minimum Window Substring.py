from collections import Counter
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""
        countT,window = Counter(t), {}
        have, need = 0,len(countT)
        res, resLen  = [-1,-1],float("infinity")
        l,r = 0,0
        for r in range(len(s)):
            c = s[r]
            window[c]  = window.get(c,0) + 1

            if c in countT and window[c] == countT[c]:
                have+=1

            while have == need:
                #update result
                if(r-l+1) < resLen:
                    res = [l,r]
                    resLen = r-l+1
                window[s[l]]-=1
                if s[l] in countT and window[s[l]] < countT[s[l]]:
                    have-=1
                l+=1
            r+=1
        l,r  = res
        ans =  s[l:r+1] if resLen!=float("infinity") else "" 
        print(ans)
        return ans
Solution().minWindow("acbbaca","aba")
Solution().minWindow("aa","aa")
Solution().minWindow("ADOBECODEBANC","ABC")
#Time complexity: O(|t|+|s|)