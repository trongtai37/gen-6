public class CourseSchedule {
    public bool CanFinish(int numCourses, int[][] prerequisites) {
        Dictionary<int, List<int>> preq = new();
        
        for(int i = 0; i < numCourses; i++)
        {
            preq.Add(i, new List<int>());
        }
        
        foreach(var item in prerequisites)
        {
            preq[item[0]].Add(item[1]);
        }
        
        HashSet<int> keys = new();
        
        bool dfs(int key)
        {
            if(keys.Contains(key)) return false;
            
            if(preq[key].Count() == 0) return true;
            
            keys.Add(key);
            foreach(var item in preq[key])
            {
                if(!dfs(item)) return false;
            }
            keys.Remove(key);
            preq[key] = new List<int>();
            return true;
        }
        
        for(int i = 0; i < numCourses; i++)
        {
            if(!dfs(i)) return false;
        }
        
        return true;
    }
}