class Solution:
    def hammingWeight(self, n: int) -> int:
        #usigned integer: 32 bit
        n_usigned_int_bit = 32
        ans = 0
        for i in range(n_usigned_int_bit):
            if (n>>i) & 1 == 1:
                ans +=1
        return ans        