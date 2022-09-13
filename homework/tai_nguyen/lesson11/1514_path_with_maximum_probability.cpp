#include <queue>
#include <vector>

using namespace std;

class Solution {
public:
  typedef pair<double, int> queue_type;

  double maxProbability(int n, vector<vector<int>> &edges,
                        vector<double> &succProb, int start, int end) {
    vector<double> probability(n, 0.0);
    vector<bool> visited(n, false);
    vector<vector<pair<int, double>>> graphs(n, vector<pair<int, double>>());
    priority_queue<queue_type> max_heap;

    for (int i = 0; i < edges.size(); i++) {
      int u = edges[i][0];
      int v = edges[i][1];

      graphs[u].push_back(make_pair(v, succProb[i]));
      graphs[v].push_back(make_pair(u, succProb[i]));
    }

    probability[start] = 1.0;
    max_heap.push(make_pair(1.0, start));

    while (max_heap.size()) {
      double current_prob = max_heap.top().first;
      int current_node = max_heap.top().second;
      max_heap.pop();

      if (!visited[current_node]) {
        for (pair<int, double> &p : graphs[current_node]) {
          int next_node = p.first;
          double w = p.second;

          if (probability[next_node] < current_prob * w) {
            probability[next_node] = current_prob * w;
            max_heap.push(make_pair(probability[next_node], next_node));
          }
        }
      }
    }

    return probability[end];
  }
};