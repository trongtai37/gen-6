import heapq
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.heap = []

    def add(self, val: int) -> int:
        if len(self.heap) == 0:
            self.heap.append(val)
            return val 
        if self.heap[0] <= val:
            heapq.heappop(self.heap)
            heapq.heappush(self.heap,val)
        return self.heap[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)