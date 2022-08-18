class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        unordered_map<int,int> hashMap;

        for (auto n: nums)
            hashMap[n]++;

        int res = 0;

        for (auto it = hashMap.begin(); it != hashMap.end(); it++) {
            int key = k + it->first;
            auto ele = hashMap.find(key);

            if (ele != hashMap.end()) {
                if (k == 0) {
                    res += hashMap[key] > 1 ? 1 : 0;
                } else {
                    res ++;
                }
            }
        }

        return res;
    }
};
