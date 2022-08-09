/**
 * @link https://leetcode.com/problems/keys-and-rooms/
 */
function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Array(rooms.length).fill(false);
  let count = 0;

  function dfs(i: number) {
    const nextRooms = rooms[i];
    count++;
    visited[i] = true;

    for (let roomNumber of nextRooms) {
      if (!visited[roomNumber]) {
        dfs(roomNumber);
      }
    }
  }

  dfs(0);

  return count === rooms.length;
}
