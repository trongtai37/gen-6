class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dic={}
        self.arr = []

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val not in self.dic:
            self.dic[val] = len(self.arr)
            self.arr.append(val)
            return True
        else:
            return False
      
    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val in self.dic:
            idx = self.dic[val]
            last = self.arr[-1]
            self.arr[-1],self.arr[idx] = self.arr[idx],self.arr[-1]
            self.arr.pop()
            self.dic[last] = idx
            del self.dic[val]
            return True
        return False

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
     
        return random.choice(self.arr)
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()