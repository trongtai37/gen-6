class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        int len = points.size();
        int index = quickSelect(points, 0, len - 1, k - 1);

        vector<vector<int>> res;

        for(int i = 0; i <= index; ++i) {
            res.push_back(points[i]);
        }

        return res;
    }

private:
    int randomPivotIndex(int low, int high) {
        if (high == low)
            return low;

        return low + rand() % (high - low);
    }

    void swap(vector<vector<int>>& arr, int a, int b) {
        vector<int> term = arr[a];
        arr[a] = arr[b];
        arr[b] = term;

        return;
    }

    int partition(vector<vector<int>>& arr, int start, int end) {
        int pivotIndex = randomPivotIndex(start, end);
        int pivot = arr[pivotIndex][0] * arr[pivotIndex][0] + arr[pivotIndex][1] * arr[pivotIndex][1];

        swap(arr, pivotIndex, end);

        int index = start;

        for(int x = start; x < end; ++x) {
            int len = arr[x][0] * arr[x][0] + arr[x][1] * arr[x][1];
            if (len < pivot) {
                swap(arr, index, x);
                index++;
            }
        }

        swap(arr, index, end);

        return index;
    }

    int quickSelect(vector<vector<int>>& arr, int start, int end, int k) {
        int pivotIndex = partition(arr, start, end);

        if (pivotIndex == k)
            return pivotIndex;

        if (pivotIndex > k)
            return quickSelect(arr, start, pivotIndex - 1, k);

        return quickSelect(arr, pivotIndex + 1, end, k);
    }
};
