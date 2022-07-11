# Solution for https://leetcode.com/problems/happy-number/

class Solution:
    def isHappy(self, n: int) -> bool:
        mset = {}

        while n not in mset:
            mset[n] = 1
            currentSum = 0

            while n != 0:
                digit = n % 10
                currentSum += digit * digit
                n = n // 10

            if currentSum == 1: return True
            else: n = currentSum

        return False