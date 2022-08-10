class MyStack:
    def __init__(self,capacity) -> None:
        self.capacity =capacity
        self.cur_idx = -1
        self.stack = [None]*self.capacity
    
    def is_empty(self):
        return self.cur_idx <0
    def is_full(self):
        return self.cur_idx >= self.capacity
    
    def push(self,element):
        if self.is_full():
            print("Stack is full")
            return False
        self.cur_idx+=1
        return self.stack[self.cur_idx]

    def pop(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        self.cur_idx -=1
        return self.stack[self.cur_idx]