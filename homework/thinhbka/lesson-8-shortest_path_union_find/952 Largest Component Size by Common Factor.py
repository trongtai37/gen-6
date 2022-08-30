class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        maxSize = max(nums)
        parent = [x for x in range(maxSize+1)]
        ranks = [0 for _ in range(maxSize+1)]
        
        def find(x,parent):
            if x!=parent[x]:
                parent[x] = find(parent[x],parent)
            return parent[x]
        def union(x,y,parent,ranks):
            px = find(x,parent)
            py = find(y,parent)
            if px!=py:
                if ranks[px] > ranks[py]:
                    parent[py] = px
                elif ranks[px] < ranks[py]:
                    parent[px] = py
                else:
                    parent[px] = py
                    ranks[py]+=1
                    
        def getListOfPrimeFactors(num):
            factor = 2
            res = []
            while num>=factor*factor:
                if num % factor == 0:
                    if not res or res[-1] != factor:
                        res.append(factor)
                    num = num//factor
                else:
                    factor+=1
            res.append(num)
            return res
        
        for num in nums:
            arr = getListOfPrimeFactors(num)
            arr.append(num)
            for i in range(len(arr)-1):
                union(arr[i],arr[i+1],parent,ranks)
        countConnected = {}
        for num in nums:
            val = find(num,parent)
            countConnected[val] = countConnected.get(val,0)+1
        return max(countConnected.values())