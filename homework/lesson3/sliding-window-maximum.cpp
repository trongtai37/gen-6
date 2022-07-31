class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<pair<int,int>> q;

        for(int i = 0; i < k; ++i) {
            while(q.size() && q.back().first < nums[i])
                q.pop_back();

            q.push_back({nums[i], i});
        }

        vector<int> res = {q.front().first};

        for(int i = k; i < nums.size(); ++i) {
            if (i - q.front().second == k)
                q.pop_front();

            while(q.size() && q.back().first < nums[i])
                q.pop_back();

            q.push_back({nums[i], i});
            res.push_back(q.front().first);
        }

        return res;
    }
};
