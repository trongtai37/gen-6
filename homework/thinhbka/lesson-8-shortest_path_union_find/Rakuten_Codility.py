#Task1:
class Solution:
    def solution(self,arr=[]):
        n = len(arr)
        pattern = [[],[]]
        h = 0
        for i in range(n):
            pattern[0].append(h)
            pattern[1].append(1-h)
            h = 1-h
        diff = [0,0]
        for i in range(n):
            for state in range(2):
                diff[state] += abs(arr[i]-pattern[state][i])
        return min(diff)
    #Time O(n), Space: O(n) which n is the size of input array

#Task2: Given a sequence T of temperature measurements,finds the partition
# of the year into winter and summer that meets the conditions above and makes winter as short as
# possible, then returns the length of the winter. Both winter and summer have to be at least one day long.
# You can assume that there exists at least one partition that satisfies this condition.

#I think, this problem quite similar with LC 42. Trapping Rain Water
class Solution:   
    def solution(self,T=[]): #Return the length summer
        maxLeft = [T[0]]
        for i in range(1,len(T)):
            maxLeft.append(max(maxLeft[-1],T[i]))
        minRight,minRight[-1] = [0]*len(T),T[-1]
        for i in range(len(T)-2,-1,-1):
            minRight[i] = min(minRight[i+1],T[i])

        for i in range(len(T)-1):
            if maxLeft[i] < minRight[i+1]:
                return i    
        #T =       [-5, -5, -5, -42, 6, 12]
        #maxLeft = [-5,  -5,  -5,  -5,  6,  12]
       #minRight = [-42, -42, -42,  -42, 6, 12]
       #Time: O(n), space O(n) with n is size of T

    def solution1(self,T = []):
        left,maxLeft = 0,T[0]
        right,minRight = len(T)-1,T[right]
        while left < right:
            if minRight > maxLeft:
                right-=1
                minRight = min(minRight,T[right])
            else:
                left+=1
                maxLeft = max(maxLeft,T[left])
        return left # O(n) time and O(1) space
#Task 3:
class Solution:
    def solution(self,root):
        self.ans = 1
        self.counter = {}
        self.dfs(root)
        return self.ans
    def dfs(self,node):
        if node.val in self.counter:
            self.ans = max(self.ans,len(self.counter))
            return
        self.counter[node.val] = True
        if node.left:
            self.dfs(node.left)
        if node.right:
            self.dfs(node.right)
    #O (n) time and space with n is total the nodes of a tree