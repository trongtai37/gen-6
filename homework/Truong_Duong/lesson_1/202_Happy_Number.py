# Solution for https://leetcode.com/problems/happy-number/

class Solution:
    def isHappy(self, n: int) -> bool:
        def getNextVal(n):
            currentSum = 0

            while n != 0:
                digit = n % 10
                currentSum += digit * digit
                n = n // 10
            return currentSum

        mset = {}
        while n not in mset:
            mset[n] = 1
            n = getNextVal(n)

        return n == 1