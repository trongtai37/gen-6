class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans {{}};

        for (int i = 0; i < nums.size(); ++i) {
            getSubsets(ans, nums[i]);
        }

        return ans;
    }
private:
    void getSubsets(vector<vector<int>>& arr, int t) {
        int n = arr.size();

        for (int i = 0; i < n; ++i) {
            vector<int> term = arr[i];
            term.push_back(t);
            arr.push_back(term);
        }
    }
};
