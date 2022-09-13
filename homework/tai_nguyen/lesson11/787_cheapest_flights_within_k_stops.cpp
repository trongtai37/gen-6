#include <limits.h>
#include <queue>
#include <vector>

class Solution {
public:
  typedef pair<int, pair<int, int>> queue_type;

  int findCheapestPrice(int n, vector<vector<int>> &flights, int src, int dst,
                        int k) {
    int d[n][k + 2];
    priority_queue<queue_type, vector<queue_type>, greater<queue_type>>
        min_heap;
    vector<vector<pair<int, int>>> edges(n);

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < k + 2; j++) {
        d[i][j] = INT_MAX;
      }
    }

    for (auto flight : flights) {
      int u = flight[0];
      int v = flight[1];
      int price = flight[2];

      edges[u].push_back(make_pair(v, price));
    }

    d[0][0] = 0;
    min_heap.push(make_pair(0, make_pair(src, 0)));

    while (min_heap.size()) {
      queue_type top = min_heap.top();
      min_heap.pop();

      int current_price = top.first;
      int u = top.second.first;
      int step = top.second.second;

      if (u == dst) {
        return current_price;
      }

      if (step >= k + 1) {
        continue;
      }

      for (auto edge : edges[u]) {
        int v = edge.first;
        int price = edge.second;

        if (d[v][step + 1] > current_price + price) {
          d[v][step + 1] = current_price + price;
          min_heap.push(make_pair(d[v][step + 1], make_pair(v, step + 1)));
        }
      }
    }

    return -1;
  }
};