# https://leetcode.com/problems/keys-and-rooms/
class Solution(object):
    def canVisitAllRooms(self, rooms):
        seen = [False] * len(rooms)
        seen[0] = True
        stack = [0]
        cnt = 0
        while stack:
            node = stack.pop() 
            cnt+=1
            for nei in rooms[node]:
                if not seen[nei]: 
                    seen[nei] = True
                    stack.append(nei) 
        return cnt == len(rooms)