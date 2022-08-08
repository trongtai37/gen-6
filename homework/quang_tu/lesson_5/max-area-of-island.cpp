class Solution {
    int maxSum = 0;
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();


        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    caculate(grid, i, j);
                }
            }
        }

        return maxSum;
    }

    vector<pair<int,int>> dir {{0,1},{1,0},{0,-1},{-1,0}};

    void caculate(vector<vector<int>>& grid, int x, int y) {
        int m = grid.size(),
            n = grid[0].size();

        queue<pair<int,int>> qe;
        qe.push({x,y});
        grid[x][y] = -1;
        int sum = 1;

        while(!qe.empty()) {
            pair<int,int> point = qe.front();
            qe.pop();

            int a = point.first,
                b = point.second;

            for (auto &d: dir) {
                int i = a + d.first,
                    j = b + d.second;

                if (isInRange(i, j, m, n) && grid[i][j] == 1) {
                    qe.push({i,j});
                    grid[i][j] = -1;
                    sum ++;
                }
            }
        }

        maxSum = max(maxSum, sum);
    }

    bool isInRange(int x, int y, int m, int n) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
};
