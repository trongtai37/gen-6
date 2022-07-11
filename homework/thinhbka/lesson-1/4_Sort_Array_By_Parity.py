class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        lastIndexOfEven = 0
        i = 0
        while i < len(nums):
            if nums[i]%2 == 0:
                #swap index: i, lastIndexOfEven of nums
                temp = nums[i]
                nums[i] = nums[lastIndexOfEven]
                nums[lastIndexOfEven] = temp
                lastIndexOfEven+=1
            i+=1
        return nums    
                