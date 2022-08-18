class RandomizedSet {
    unordered_map<int,int> hashMap;
    vector<int> array;
public:
    RandomizedSet() {
        array = {};
        hashMap = {};
    }

    bool insert(int val) {
        if (!isPresent(val)) {
            hashMap[val] = array.size();
            array.push_back(val);

            return true;
        }

        return false;
    }

    bool remove(int val) {
        if (isPresent(val)) {
            int index = hashMap[val];

            swap(index, array.size() - 1);

            array.pop_back();
            hashMap.erase(val);

            return true;
        }

        return false;
    }

    int getRandom() {
        int random = rand() % array.size();

        return array[random];
    }
private:
    void swap(int x, int y) {
        int a = array[x],
            b = array[y];

        array[x] = b;
        array[y] = a;

        hashMap[a] = y;
        hashMap[b] = x;
    }

    bool isPresent(int val) {
        auto isPr = hashMap.find(val);

        return isPr != hashMap.end();
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */
