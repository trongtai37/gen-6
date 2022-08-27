class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        firstPt = 0
        secondPt = len(numbers)-1
        while firstPt<=secondPt:
            # print(firstPt,secondPt)
            s = numbers[firstPt]+numbers[secondPt]
            if s==target:
                return [firstPt+1,secondPt+1]
            elif s < target:
                firstPt+=1
            else:
                secondPt-=1