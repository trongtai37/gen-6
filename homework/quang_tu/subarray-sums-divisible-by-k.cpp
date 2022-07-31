class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        unordered_map<int,int> hashMap;
        hashMap[0] = 1;

        int sum = 0, mod, ans = 0;

        for (int i = 0; i < nums.size(); ++i) {
            sum += nums[i];

            mod = sum%k;

            if (mod < 0) mod += k;

            if (hashMap.find(mod) != hashMap.end()) {
                ans += hashMap[mod];
                hashMap[mod]++;
            } else {
                hashMap[mod] = 1;
            }
        }

        return ans;
    }
};
