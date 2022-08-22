from operator import le


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        hash_t  = {}
        for char in t:
            if char not in hash_t:
                hash_t[char] = 0
            hash_t[char]+=1
        number_of_distict = len(hash_t)
        hash_s = {}
        left= 0
        right = 0
        count_distincr_s = 0
        ans = []
        while right < len(s):
            if s[right] not in hash_s:
                hash_s[s[right]] = 0
            hash_s[s[right]]+=1
            if s[right] in hash_t and hash_s[s[right]] >= hash_t[s[right]]:
                count_distincr_s+=1
                if count_distincr_s == number_of_distict:
                    while count_distincr_s == number_of_distict:
                        if s[left] in hash_t:
                            count_distincr_s-=1
                        hash_s[s[left]]-=1
                        left+=1
                    ans.append([left-1,right])           
                #possible answer
            right+=1
        print(ans)
        for e in ans:
            print(s[e[0]:e[1]+1])
Solution().minWindow("ADOBECODEBANC","ABC")