from collections import Counter
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        counter_t = Counter(t) #O(t)
        counter_s = {}
        right = 0
        left = 0
        ans = []
        while right < len(s):#O(s)
            number_distint = 0
            char = s[right]
            #add to hashmap
            if char in counter_t:
                if char not in counter_s:
                    counter_s[char] = 0
                counter_s[char] +=1

                #check for corresponding 
                for c in counter_t:#O(52) because in worst case the are 52 characters in counter_t,btw how to optimal this part?
                    if c in counter_t and c in counter_s and counter_s[c]>=counter_t[c]:
                        number_distint+=1
                if number_distint == len(counter_t):# if find a possible answer
                    while number_distint == len(counter_t):
                        if s[left] in counter_s:
                            counter_s[s[left]]-=1
                            if counter_s[s[left]] < counter_t[s[left]]:
                                number_distint-=1
                                if counter_s[s[left]] == 0:
                                    del counter_s[s[left]]
                        left+=1
                    if len(ans) == 0 or ans[1]-ans[0] > right-left+1:
                        ans = [left-1,right]
                        print(s[ans[0]:ans[1]+1])
                    
            right+=1
        if ans:
            # print(ans)
            return s[ans[0]:ans[1]+1]
        return ""
Solution().minWindow("acbbaca","aba")
Solution().minWindow("aa","aa")
Solution().minWindow("ADOBECODEBANC","ABC")
#Time complexity: O(|t|+|s|)