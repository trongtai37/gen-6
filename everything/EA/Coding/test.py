import unittest
from set import HashTable,BLANK

class Test(unittest.TestCase):
    def hash_table(self):
        sample_data = HashTable(capacity=100)
        sample_data["hola"] = "hello"
        sample_data[98.6] = 37
        sample_data[False] = True
        return sample_data
    def test_1(self):
        """Test case for construction of  HashTable is not None"""
        self.assertIsNotNone(HashTable(100))

    def test_insert_key_value(self):
        """Test case for inserting key-value pairs into your hash table """
        hash_table = HashTable(capacity=100)
        hash_table["hola"] = "hello"
        hash_table[98.6] = 37
        hash_table[False] = True
        self.assertTrue("hello" in hash_table.values)
        self.assertTrue(37 in hash_table.values)
        self.assertTrue(True in hash_table.values)

    def test_should_create_empty_value_slots(self):
        self.assertTrue( HashTable(capacity=3).values == [BLANK, BLANK, BLANK])
    
    def test_should_insert_none_value(self):
        hash_table = HashTable(capacity=100)
        hash_table["key"] = None
        self.assertTrue(None in hash_table.values)

    

    def test_should_find_value_by_key(self):
        hash_tbl = self.hash_table() 
        assert hash_tbl["hola"] == "hello"
        assert hash_tbl[98.6] == 37
        assert hash_tbl[False] is True

    def test_should_raise_error_on_missing_key(self):
        hash_table = HashTable(capacity=100)
        value = hash_table["missing_key"]
        self.assertTrue(value==BLANK)

    def test_should_find_key(self):
        hash_table = self.hash_table()
        self.assertTrue( "hola" in hash_table)

    def test_should_not_find_key(self):
        hash_table = self.hash_table()
        self.assertFalse( "missing_key" in hash_table)

    def test_should_delete_key_value_pair(self):
        hash_table = self.hash_table()
        del hash_table["hola"]
        self.assertTrue("hola" not in hash_table)
        assert len(hash_table) == 100

    def test_should_update_value(self):
        hash_table = self.hash_table()
        assert hash_table["hola"] == "hello"
        hash_table["hola"] = "hallo"
        assert hash_table["hola"] == "hallo"
        assert hash_table[98.6] == 37
        assert hash_table[False] is True
        assert len(hash_table) == 100
    def test_should_return_pairs(self):
        hash_table = self.hash_table()
        assert ("hola", "hello") in hash_table.values
        assert (98.6, 37) in hash_table.values
        assert (False, True) in hash_table.values
if __name__ == "__main__":
    unittest.main()