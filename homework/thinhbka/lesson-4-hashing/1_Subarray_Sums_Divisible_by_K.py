
#Create prefixS array :prefixS[i] = arr[0] + arr[1]+ ... + arr[i]
# sum(i,j) = arr[i] + arr[i+1] + ... + arr[j] = prefixS[j]- prefixS[i-1]
# sum(i,j) mod k == 0  => (pS[j]-ps[i]) mod k == 0 => pS[j] mod k == pS[i-1] mod k.

class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        dic = {}
        dic[0] = 1
        cur = 0
        ans = 0
        for e in nums:
            cur +=e
            div = cur%k
            if div not in dic:
                dic[div] =0
            ans+=dic[div]
            dic[div]+=1
        return ans