function canVisitAllRooms(rooms: number[][]): boolean {
  let count = 0;
  const visited: { [key: string]: boolean } = {};

  function dfs(roomIndex: number) {
    count++;
    visited[roomIndex] = true;

    for (const room of rooms[roomIndex]) {
      if (!visited[room]) {
        dfs(room);
      }
    }
  }

  dfs(0);

  return count === rooms.length;
}
