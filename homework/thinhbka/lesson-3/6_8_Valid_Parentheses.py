# Input: s = "()[]{}"
# Output: true
pattern  ={"(":")","{":"}","[":"]"}
def isOpen(char):
    return char in "({["
def isClose(char):
    return char in ")}]"
def isMatch(open,close):
    return pattern[open]==close    
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for char in s:
            if isOpen(char):
                stack.append(char)
            elif isClose(char):
                if not stack:
                    return False
                if isMatch(char,stack[-1]):
                    stack.pop()
                else:
                    return False
        return len(stack)==0