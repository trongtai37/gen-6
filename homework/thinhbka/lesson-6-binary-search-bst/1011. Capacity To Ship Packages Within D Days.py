def check(capacity,weights,days):
    current = 0
    days-=1
    for e in weights:
        if current + e <= capacity:
            current +=e
        else:
            current = e
            days-=1
    return days >= 0
        
        
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l = max(weights)
        r = sum(weights)
        while l <= r:
            mid = (l+r)>>1
            if check(mid,weights,days) is True:
                ans = mid
                r = mid-1
            else:
                l = mid+1
        return ans