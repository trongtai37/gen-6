class NumMatrix {
public:
    vector<vector<int>> mtx;

    NumMatrix(vector<vector<int>>& matrix) {
        int h = matrix.size(),
            w = matrix[0].size();

        mtx.push_back(vector<int> (w + 1));

        for (int i = 0; i < h; ++i) {
            int t = 0;
            mtx.push_back({0});

            for (int j = 0; j < w; ++j) {
                t += matrix[i][j];
                mtx[i+1].push_back(t + mtx[i][j+1]);
            }
        }
    }

    int sumRegion(int row1, int col1, int row2, int col2) {
        return mtx[row2 + 1][col2 + 1] + mtx[row1][col1] - (mtx[row1][col2+1] + mtx[row2+1][col1]);
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */
