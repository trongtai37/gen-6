# Method 1
#TLE error O(R*C*R*C)
class Solution:
    def sumRegion(self, row1, col1, row2, col2):
        row2 +=1
        col2 +=1
        row1+=1
        col1+=1
        return self.prefixSum2D[row2][col2]+self.prefixSum2D[row1-1][col1-1]-self.prefixSum2D[row1-1][col2]-self.prefixSum2D[row2][col1-1]
    def numSubmatrixSumTarget(self, matrix, target) -> int:
        h = len(matrix)
        w = len(matrix[0])
        
        self.prefixSum2D = [[0 for _ in range(w+1)] for _ in range(h+1)]
        for row in range(h):
            for col in range(w):
                self.prefixSum2D[row+1][col+1] = matrix[row][col]+ self.prefixSum2D[row+1][col]+self.prefixSum2D[row][col+1]-self.prefixSum2D[row][col]
        ans = 0
        for r in self.prefixSum2D:
            print(r)
        for f_r in range(h):
            for f_c in range(w):
                for t_r in range(f_r,h):
                    for t_c in range(f_c,w):
                        if self.sumRegion(f_r,f_c,t_r,t_c) == target:
                            ans+=1
        return ans


#Method 2: Prefix Sum
#Runtime O (R*R*C)
class Solution:
    def numSubmatrixSumTarget(self, matrix, target) -> int:
        h = len(matrix)
        w = len(matrix[0])
        
        self.prefixSum2D = [[0 for _ in range(w+1)] for _ in range(h+1)]
        for row in range(h):
            for col in range(w):
                self.prefixSum2D[row+1][col+1] = matrix[row][col]+ self.prefixSum2D[row+1][col]+self.prefixSum2D[row][col+1]-self.prefixSum2D[row][col]
        ans = 0
        
        for y in range(h):
            for y1 in range(y,h):
                dic = {0:1}
                for x in range(n):
                    matrix_sum = self.prefixSum2D[y1+1][x]-self.prefixSum2D[y+1][x]
                    if matrix_sum-target in dic:
                        ans+= dic[matrix_sum-target]
                    if matrix_sum not in dic:
                        dic[matrix_sum] = 0
                    dic[matrix_sum]+=1
        return ans

