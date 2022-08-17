
from collections import defaultdict


class Node:
    def __init__(self,value = 0,key = None,name =None) -> None:
        self.key = key
        self.next = None
        self.pre = None
        self.name = name
class LRUCache:
    
    def __init__(self, capacity: int):
        self.head = Node()
        self.tail = Node()
        # head <-> tail
        self.connect(self.head,self.tail)
        self.cap = capacity
        self.dic = {}
    def connect(self,from_node:Node,to_node:Node):
        #head <-> pre  <-> node <-> next <->tail
        from_node.next = to_node
        to_node.pre = from_node
    def isolate(self,node:Node)->None:
        # pre  <-> node <-> next  ----->  pre <--> next  
        pre = node.pre
        next = node.next
        self.connect(pre,next)

    def append(self,new_node:Node):
        #head <-> node0  <-> node1 <-> next <->tail   ----> head <->new_node <-> node0  <-> node1 <-> next <->tail
        cur = self.head.next
        self.connect(self.head,new_node)
        self.connect(new_node,cur)
    def pop(self)->Node:
        #head <-> node0  <-> node1 <-> LAST <->tail  ----> #head <-> node0  <-> node1 <-->tail 
        last = self.tail.pre
        self.isolate(last)
        return last
        
    def get(self, key: int) -> int:
        if key not in self.dic:
            return -1
        node = self.dic[key]
        self.isolate(node)
        self.append(node)
        return node.value
    def put(self, key: int, value: int) -> None:
        if key in self.dic:
            node = self.dic[key]
            node.value = value
            self.isolate(node)
            self.append(node)
        else:
            if len(self.dic) == self.cap:
                node = self.pop()
                del self.dic[node.key]
            new_node = Node(value=value,key=key)
            self.dic[key] = new_node
            self.append(new_node)
    def __str__(self) -> str:
        if self.name is not None:
            return f"({self.name})"
        return f"( {self.key}:{self.value})" 
        
class LRUCache:

    def __init__(self, capacity: int):
        self.head = Node(name="head")
        self.tail = Node(name ="tail")
        self.connect(self.head,self.tail)
        self.capacity = capacity
        self.dic = {}
        self.ans = [None]

    def connect(self,from_node:Node,to_node:Node):
        from_node.next = to_node
        to_node.pre = from_node

    def get(self, key: int) -> int:
        #Return the value of the key if the key exists, otherwise return -1.
        if key not in self.dic:
            self.ans.append(-1)
            return -1
        node = self.dic[key]
        pre = node.pre
        next = node.next
        self.connect(pre,next)
        cur = self.head.next
        self.connect(node,cur)
        self.connect(self.head,node)
        self.ans.append(node.value)
        return node.value
    def put(self, key: int, value: int) -> None:
        if key  in self.dic:
            node = self.dic[key]
            node.value = value # update new value
            pre = node.pre
            next = node.next
            self.connect(pre,next)
            cur = self.head.next
            self.connect(node,cur)
            self.connect(self.head,node)
        else:
            if len(self.dic)== self.capacity:
                last = self.tail.pre
                pre = last.pre
                next = last.next
                self.connect(pre,next)
                old_key = last.key
                del self.dic[old_key]
                del last
            new_node = Node(value=value,key=key)
            self.dic[key] = new_node
            cur = self.head.next
            self.connect(self.head,new_node)
            self.connect(new_node,cur)
        self.ans.append(None)
    def __str__(self) -> str:
        cur = self.head
        s= ""
        while cur:
            s+= str(cur)+"<------>"
            cur = cur.next
        return s
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = 0
        s = 0
        dic = {0:1}
        for i in range(len(nums)):
            s+=nums[i]
            val = s-k
            if val in dic:
                res+=dic[val]
            if s not in dic:
                dic[s] = 0
            dic[s]+=1
        return res