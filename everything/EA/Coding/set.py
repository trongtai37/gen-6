#Some core features

# 1. Insert a key-value pair to the hash table
# 2. Delete a key-value pair from the hash table
# 3. Find a value by key in the hash table => if found? if not?
# 4. Update the value associated with an existing key
# 5. Check if the hash table has a given key
# 6. Dealing with Collison? (a!=b -> hash(a)=hash(b))


BLANK = object()
class HashTable:
    def __init__(self, capacity):
        self.values = capacity * [BLANK]

    def __len__(self):
        return len(self.values)

    def _index(self,key):
        return hash(key)%len(self)

    def __setitem__(self, key, value):
        index = self._index(key)
        self.values[index] = value

    def __getitem__(self, key):
        index = index = self._index(key)
        value = self.values[index]
        return value
    
    def __contains__(self, key):
        return self[key] != BLANK
    
    def __delitem__(self,key):
        self[key] = BLANK