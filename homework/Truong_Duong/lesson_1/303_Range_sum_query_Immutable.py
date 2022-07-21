# Solution for https://leetcode.com/problems/range-sum-query-immutable/

class NumArray:

    def __init__(self, nums: List[int]):
        self.data = [0] * len(nums)

        self.data[0] = nums[0]
        for i in range(1, len(nums)):
            self.data[i] = self.data[i-1] + nums[i]


    def sumRange(self, left: int, right: int) -> int:
        return self.data[right] if left == 0 else self.data[right] - self.data[left-1]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)