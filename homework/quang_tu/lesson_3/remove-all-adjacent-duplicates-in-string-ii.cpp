class Solution {
public:
    string removeDuplicates(string s, int k) {
        vector<pair<char,int>> remain;

        for(int i = 0; i < s.length(); ++i) {
            if (remain.empty() || remain.back().first != s[i]) {
                remain.push_back({s[i], 1});
            } else if (++remain.back().second == k) {
                remain.pop_back();
            }
        }

        string res = "";

        for (auto &p : remain) {
            char letter = p.first;
            int total = p.second;

            for (int i = 0; i < total; ++i)
                res += letter;
        }

        return res;
    }
};
