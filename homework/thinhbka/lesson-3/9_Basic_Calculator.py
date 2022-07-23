#  s = "(1+(4+5+2)-3)-(6+8)"
from collections import deque
import re
class Solution:
    def calculate(self, s: str) -> int:
        curr,output,sign,stack = 0,0,1,[]
        
        for ch in s:
            if ch.isdigit():
                curr = curr * 10 + int(ch)
            
            elif ch == '+':                
                output += sign * curr              
                sign = 1 
                curr = 0
                
            elif ch == '-':
                output += sign * curr
                sign = -1
                curr  = 0
            
            elif ch == '(':
                #push the result and then the sign
                stack.append(output)
                stack.append(sign)
                sign = 1
                output = 0
            
            elif ch == ')':
                output += sign * curr
                output *= stack.pop()
                output += stack.pop()
                curr = 0
        return output + sign*curr
# s = "5+3-4-(1+2-7+(10-1+3+5+(3-0+(8-(3+(8-(10-(6-10-8-7+(0+0+7)-10+5-3-2+(9+0+(7+(2-(2-(9)-2+5+4+2+(2+9+1+5+5-8-9-2-9+1+0)-(5-(9)-(0-(7+9)+(10+(6-4+6))+0-2+(10+7+(8+(7-(8-(3)+(2)+(10-6+10-(2)-7-(2)+(3+(8))+(1-3-8)+6-(4+1)+(6))+6-(1)-(10+(4)+(8)+(5+(0))+(3-(6))-(9)-(4)+(2))))))-1)))+(9+6)+(0))))+3-(1))+(7))))))))"
# s = "( 5 - (9) + (-9) + ( 7+( 4+ (-2) - (3+4+5)  - (-3 -4 -5) ) )  )"
# ( 5 - 9 + -9 + ( 7 + 6)
s = "((1+(4+5+2)-3)-(6+8))"
sol  = Solution()
sol.calculate(s)
# numA op numB op numC   op is + or -
# numA + op*numb + op*numC