class Node:
    def __init__(self,value=0,key = 0,name =""):
        self.value = value
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