class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int len = nums.size();

        return quickSelect(nums, 0, len-1, len - k);
    }

private:
    int randomPivotIndex(int low, int high) {
        if (high == low)
            return low;

        return low + rand() % (high - low);
    }

    void swap(vector<int>& arr, int a, int b) {
        int term = arr[a];
        arr[a] = arr[b];
        arr[b] = term;

        return;
    }

    int partition(vector<int>& arr, int start, int end) {
        int pivotIndex = randomPivotIndex(start, end);
        int pivot = arr[pivotIndex];

        swap(arr, pivotIndex, end);

        int index = start;

        for(int x = start; x < end; ++x) {
            if (arr[x] < pivot) {
                swap(arr, index, x);
                index++;
            }
        }

        swap(arr, index, end);

        return index;
    }

    int quickSelect(vector<int>& arr, int start, int end, int k) {
        int pivotIndex = partition(arr, start, end);

        if (pivotIndex == k)
            return arr[pivotIndex];

        if (pivotIndex > k)
            return quickSelect(arr, start, pivotIndex - 1, k);

        return quickSelect(arr, pivotIndex + 1, end, k);
    }
};
