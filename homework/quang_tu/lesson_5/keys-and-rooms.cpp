class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        vector<bool> visited(rooms.size(), false);
        int count = 0;

        dfs(visited, rooms, 0, count);

        return count == rooms.size();
    }

    void dfs(vector<bool>& visited, vector<vector<int>>& rooms, int index, int& count) {
        visited[index] = true;
        count++;

        for (int i = 0; i < rooms[index].size(); ++i) {
            int val = rooms[index][i];

            if (!visited[val])
                dfs(visited, rooms, val, count);
        }
    }
};
