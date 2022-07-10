# Solution for https://leetcode.com/problems/sort-array-by-parity/

class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        boundary = 0

        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                nums[i], nums[boundary] = nums[boundary], nums[i]
                boundary += 1

        return nums