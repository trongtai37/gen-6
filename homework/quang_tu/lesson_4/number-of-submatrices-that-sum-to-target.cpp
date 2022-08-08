class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
        int m = matrix.size(),
            n = matrix[0].size();

        vector<vector<int>> map (m + 1, vector<int> (n + 1, 0));

        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                map[i][j] = matrix[i - 1][j - 1] + map[i][j - 1] + map[i - 1][j] - map[i - 1][j - 1];
            }
        }

        int count = 0;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                for (int k = i; k <= m; k++) {
                    for (int l = j; l <= n; l++) {
                        if (target == map[k][l] - map[i - 1][l] - map[k][j - 1] + map[i - 1][j - 1]) {
                            count++;
                        }
                    }
                }
            }
        }

        return count;
    }
};
