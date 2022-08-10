// Solution for https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const N = rooms.length;
    const visited = new Array(N).fill(false);

    const dfs = function(s) {
        visited[s] = true;
        count += 1;
        
        for(const v of rooms[s]) {
            if(!visited[v]) dfs(v);
        }
    }
    
    var count = 0;
    dfs(0);
    
    return count === rooms.length;
};