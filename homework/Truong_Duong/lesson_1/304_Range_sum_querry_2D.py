# Solution for https://leetcode.com/problems/range-sum-query-2d-immutable/

class NumMatrix:
    def getVal(self, i, j):
        if i < 0 or j < 0: return 0
        return self.data[i][j]

    def __init__(self, matrix: List[List[int]]):
        R, C = len(matrix), len(matrix[0])
        self.data = [[0] * C for _ in range(R)]

        for i in range(R):
            for j in range(C):
                self.data[i][j] = self.getVal(i-1, j) + self.getVal(i, j-1) - self.getVal(i-1, j-1) + matrix[i][j]

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.getVal(row2, col2) - self.getVal(row2, col1-1) - self.getVal(row1-1, col2) + self.getVal(row1-1, col1-1)


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)