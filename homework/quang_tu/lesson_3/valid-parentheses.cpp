class Solution {
public:
    bool isValid(string s) {
        stack<char> valid;

        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
                valid.push(s[i]);
            } else {
                if (!valid.size())
                    return false;

                char top = valid.top();
                valid.pop();

                if (top == '(' && s[i] != ')' || top == '[' && s[i] != ']' || top == '{' && s[i] != '}')
                    return false;
            }
        }

        return valid.size() == 0;
    }
};
