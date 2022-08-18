import java.util.*;

class RandomizedSet {
    private Map<Integer, Integer> map; // key: val, value: index
    private List<Integer> list;
    private Random rand = new Random();

    public RandomizedSet() {
        this.map = new HashMap<>();
        this.list = new ArrayList<>();
    }

    public boolean insert(int val) {
        if (map.containsKey(val)) {
            return false;
        }
        list.add(val);
        map.put(val, list.size() - 1);

        return true;
    }

    public boolean remove(int val) {
        if (!map.containsKey(val)) {
            return false;
        }
        int removeElementIdx = map.get(val);
        int lastElementIdx = list.size() - 1;
        int lastElementVal = list.get(lastElementIdx);

        int temp = list.get(removeElementIdx);
        list.set(removeElementIdx, lastElementVal);
        list.set(lastElementIdx, temp);

        list.remove(lastElementIdx);
        map.put(lastElementVal, removeElementIdx);
        map.remove(val);

        return true;
    }

    public int getRandom() {
        return list.get(rand.nextInt(list.size()));
    }
}
