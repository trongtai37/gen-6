#include <queue>
#include <vector>

using namespace std;

class KthLargest {
public:
  priority_queue<int, vector<int>, greater<int>> min_heap;
  int size;

  KthLargest(int k, vector<int> &nums) {
    size = k;
    for (auto i : nums) {
      add(i);
    }
  }

  int add(int val) {
    min_heap.push(val);
    while (min_heap.size() > size) {
      min_heap.pop();
    }

    return min_heap.top();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */