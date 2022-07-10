# Solution for https://leetcode.com/problems/single-number/

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        temp = 0
        for n in nums:
            temp = temp ^ n
        return temp