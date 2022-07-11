class NumArray {
public:
    vector<int> arr = {0};

    NumArray(vector<int>& nums) {
        for (int i = 0; i < nums.size(); ++i)
            arr.push_back(arr[i] + nums[i]);
    }

    int sumRange(int left, int right) {
        return arr[right + 1] - arr[left];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */
