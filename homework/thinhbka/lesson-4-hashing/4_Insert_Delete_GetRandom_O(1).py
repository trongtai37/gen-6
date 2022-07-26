class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dic={}
        self.count=0

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.dic:
            return False
        self.dic[val] = val
        self.count+=1
        # print("insert success", self.dic)
        return True
      
    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        
        if val in self.dic:
            del self.dic[val]
            return True
        return False

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
     
        return random.choice(list(self.dic.values()))
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()