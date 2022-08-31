class Solution:
    def valid(self,arr1,arr2):
        for i in range(26):
            if arr1[i]!=arr2[i]:
                return False
        return True
    def idx(self,c):
        return ord(c)-ord("a")
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1)>len(s2):
            return False
        fre1,fre2 = [0]*26,[0]*26
        for i in range(len(s1)):#O(|s1|)
            fre1[self.idx(s1[i])]+=1
            fre2[self.idx(s2[i])]+=1
        if self.valid(fre1,fre2):
            return True
        for i in range(len(s1),len(s2)):#O(26*(|s2|-|s1|))
            removeChar = s2[i-len(s1)]
            fre2[self.idx(s2[i])]+=1
            fre2[self.idx(removeChar)]-=1
            if self.valid(fre1,fre2):
                return True
        return False
sol = Solution()
print(sol.checkInclusion("ab", "eidbaooo"))
print(sol.checkInclusion("ab", "eidboaoo"))
print(sol.checkInclusion("abc", "eidbobcaoo"))
print(sol.checkInclusion("adc", "dcda"))

#"abc", "eidbobcaoo"
# counter {a:1,b:1,c:2}
#  e:1,i:1,b:1
#equal = 1 
class Solution:
    def idx(self,c):
        return ord(c)-ord("a")
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1)>len(s2):
            return False
        fre1,fre2 = [0]*26,[0]*26
        for i in range(len(s1)):#O(|s1|)
            fre1[self.idx(s1[i])]+=1
            fre2[self.idx(s2[i])]+=1
        equal = 0
        for i in range(26):
            if fre1[i] == fre2[i]:
                equal+=1
        for i in range(len(s1),len(s2)):#O(26*(|s2|-|s1|))
            if equal == 26:
                return True
            r = self.idx(s2[i])
            l = self.idx(s2[i-len(s1)])
            fre2[r]+=1
            if fre2[r] == fre1[r]:
                equal+=1
            elif fre2[r] == fre1[r]+1:
                equal-=1
            fre2[l]-=1
            if fre2[l] ==fre1[l]:
                equal+=1
            elif fre2[l] == fre1[l]-1:
                equal-=1
        return equal == 26
sol = Solution()
print(sol.checkInclusion("ab", "eidbaooo"))
print(sol.checkInclusion("ab", "eidboaoo"))
print(sol.checkInclusion("abc", "eidbobcaoo"))
print(sol.checkInclusion("adc", "dcda"))