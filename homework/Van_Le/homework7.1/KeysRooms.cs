public class KeysRooms{
    public bool CanVisitAllRooms(IList<IList<int>> rooms) {
        List<int> totalRooms = Enumerable.Range(0, rooms.Count).ToList();

        Stack<int> stack = new Stack<int>();
        stack.Push(0);
        totalRooms.Remove(0);
        while (stack.Count>0)
        {
            var p = stack.Pop();
            foreach (int key in rooms[p])
            {
                if (key == p) continue;
                if (totalRooms.Contains(key))
                {
                    stack.Push(key);
                    totalRooms.Remove(key);
                }

                if (totalRooms.Count == 0) return true;
            }
        }

        return totalRooms.Count == 0; 
    }
}