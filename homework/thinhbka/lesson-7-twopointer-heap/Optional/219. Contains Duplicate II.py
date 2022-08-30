from collections import defaultdict
from email.policy import default


class Solution:
    def containsNearbyDuplicate(self, nums, k) -> bool:
        window = defaultdict(int)
        for i in range(len(nums)):
            if nums[i] in window:
                return True
            window[nums[i]] = i
            if i>=k:
                del window[nums[i-k]]
        return False
print(Solution().containsNearbyDuplicate([1,2,3,1,2,3]
,2))