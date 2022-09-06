from sortedcontainers import SortedList

class MedianFinder:

    def __init__(self):
        self.list = SortedList()

    def addNum(self, num: int) -> None:
        self.list.add(num)

    def findMedian(self) -> float:
        n = len(self.list)
        if  n%2==0:
            return (self.list[(n-1)//2]+self.list[(n-1)//2 +1])/2
        return self.list[(n-1)//2]