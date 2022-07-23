class NumArray:

    def __init__(self, nums: List[int]):
        self.cu_sum = [nums[0]]
        for i in range(1,len(nums)):
            self.cu_sum.append(self.cu_sum[-1]+nums[i])
        self.nums = nums

    def sumRange(self, left: int, right: int) -> int:
        return self.cu_sum[right]-self.cu_sum[left]+self.nums[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)