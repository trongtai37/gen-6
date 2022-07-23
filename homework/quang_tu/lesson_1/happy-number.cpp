class Solution {
public:
    bool isHappy(int n) {
        int first = getNext(n),
            second = getNext(getNext(n));

        while (second != 1) {
            first = getNext(first);
            second = getNext(getNext(second));

            if (first == second)
                return false;
        }

        return true;
    }
    
private:
    int getNext(int n) {
        int res = 0;
        while (n) {
            int t = n%10;
            res += t*t;
            n /= 10;
        }

        return res;
    }
};
