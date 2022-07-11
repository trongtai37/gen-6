class NumMatrix:

    def __init__(self, matrix):
        h = len(matrix)
        w = len(matrix[0])
        
        self.prefixSum2D = [[0 for _ in range(w+1)] for _ in range(h+1)]
        for row in range(h):
            for col in range(w):
                self.prefixSum2D[row+1][col+1] = matrix[row][col]+ self.prefixSum2D[row+1][col]+self.prefixSum2D[row][col+1]-self.prefixSum2D[row][col]
        for i in range(h+1):
            print(self.prefixSum2D[i])
    def sumRegion(self, row1, col1, row2, col2):
        row2 +=1
        col2 +=1
        row1+=1
        col1+=1
        return self.prefixSum2D[row2][col2]+self.prefixSum2D[row1-1][col1-1]-self.prefixSum2D[row1-1][col2]-self.prefixSum2D[row2][col1-1]



# Your NumMatrix object will be instantiated and called as such:
# matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]
# obj = NumMatrix(matrix)
# # param_1 = obj.sumRegion(row1,col1,row2,col2)
# print(obj.sumRegion(2, 1, 4, 3))
# print(obj.sumRegion(1, 1, 2, 2))
# print(obj.sumRegion(1, 2, 2, 4))
# test = [[2,1,4,3],[1,1,1,1],[0,0,0,0]]
# for e in test:
#     print(obj.sumRegion(e[0],e[1],e[2],e[3]))