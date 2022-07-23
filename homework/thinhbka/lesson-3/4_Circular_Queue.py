#Method 1: Using Single Linked List
# Time complexity for each operator O(1)
# Space: O(k)
class Node:
    def __init__(self,val):
        self.val = val
        self.next = None
        pass
    def __str__(self) -> str:
        return f"{self.val}->"

class MyCircularQueue:
    def __init__(self, k: int):
        self.queue = [None]*k
        self.head = None
        self.tail = None
        self.max = k
        self.size = 0
    def enQueue(self, value: int) -> bool:
        #Inserts an element into the circular queue. Return true if the operation is successful.
        if self.isFull():
            return False
        if self.head is None:
            self.head = Node(value)
            self.tail = self.head
            self.size+=1
            return True
        new = Node(value)
        self.tail.next = Node(value)
        self.tail = self.tail.next
        self.size +=1
        return True
    def deQueue(self) -> bool:
       #Deletes an element from the circular queue. Return true if the operation is successful.
        if self.isEmpty():
            return False
        self.head = self.head.next
        self.size-=1
        return True
    def Front(self) -> int:
        #Gets the front item from the queue. If the queue is empty, return -1.
        if self.isEmpty():
            return -1
        return self.head.val

    def Rear(self) -> int:
        #Gets the last item from the queue. If the queue is empty, return -1.
        if self.isEmpty():
            return -1
        return self.tail.val

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.max

op = [ "Rear", "isFull", "deQueue", "enQueue", "Rear"]
vals = [ [], [], [], [4], []]
sol  = MyCircularQueue(3)
print(sol.enQueue(1))
print(sol.enQueue(2))
print(sol.enQueue(3))
print(sol.enQueue(4))
print(sol.Rear())
print(sol.isFull())
print(sol.deQueue())
print(sol.enQueue(4))
print(sol.Rear())


#Method 2: Using fixed array with size k
# Time complexity for each operator O(1)
# Space: O(k) for maintaining array size k
class MyCircularQueue:
    def __init__(self, k: int):
        self.arr = [0]*k
        self.front_idx = -1
        self.rear_idx = -1
        self.k = k
    def enQueue(self, value: int) -> bool:
        #Inserts an element into the circular queue. Return true if the operation is successful.
        if self.isFull():
            return False
        if self.isEmpty():
            self.front_idx = 0
            self.rear_idx = 0
            self.arr[self.front_idx] = value
            return True
        self.rear_idx=(self.rear_idx+ 1)%self.k
        self.arr[self.rear_idx]=value
        return True
    def deQueue(self) -> bool:
       #Deletes an element from the circular queue. Return true if the operation is successful.
        if self.isEmpty():
            return False
        if self.front_idx == self.rear_idx:
            self.front_idx = -1
            self.rear_idx = -1
            return True
        self.front_idx = (self.front_idx+1)%self.k
        return True
    def Front(self) -> int:
        #Gets the front item from the queue. If the queue is empty, return -1.
        if self.isEmpty():
            return -1
        return self.arr[self.front_idx]
    def Rear(self) -> int:
        #Gets the last item from the queue. If the queue is empty, return -1.
        if self.isEmpty():
            return -1
        return self.arr[self.rear_idx]

    def isEmpty(self) -> bool:
        return self.front_idx == -1 and self.rear_idx == -1

    def isFull(self) -> bool:
        return (self.rear_idx+1)%self.k == self.front_idx
