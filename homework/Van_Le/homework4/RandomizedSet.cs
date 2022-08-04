namespace running_app
{
    public class RandomizedSet
    {
        private Dictionary<int, int> _dict;
        private List<int> _list;
        private Random _rand;

        // Initialize data structure
        public RandomizedSet()
        {
            _dict = new Dictionary<int, int>();
            _list = new List<int>();
            _rand = new Random();
        }

        // Inserts a value to the set. Returns true if the set did not already contain the specified element.
        public bool Insert(int val)
        {
            if (_dict.ContainsKey(val))
                return false;
            _list.Add(val);
            int index = _list.Count - 1;
            _dict[val] = index;
            return true;
        }

        // Removes a value from the set. Returns true if the set contained the specified element.
        public bool Remove(int val)
        {
            if (!_dict.ContainsKey(val))
                return false;
            int index = _dict[val];

            // to pop at O(1) complexity time, it needs to swap the desired position and pop that out
            (_list[index], _list[^1]) = (_list[^1], _list[index]);

            _dict[_list[index]] = index;
            _list.RemoveAt(_list.Count - 1);
            _dict.Remove(val);
            return true;
        }

        // Get a random element from the set. 
        public int GetRandom()
        {
            int index = _rand.Next(0, _list.Count);
            return _list[index];
        }
    }
}
