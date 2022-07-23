// recursion
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head || !head->next)
            return head;

        return reverse(head, nullptr);
    }

private:
    ListNode* reverse(ListNode* cur, ListNode* pre) {
        if (!cur)
            return pre;

        ListNode* next = cur->next;
        cur->next = pre;

        return reverse(next, cur);
    }
};

// Loop
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head || !head->next)
            return head;

        ListNode* pre = nullptr;
        ListNode* cur = head;

        while(cur) {
            ListNode* term = cur->next;
            cur->next = pre;
            pre = cur;
            cur = term;
        }

        return pre;
    }
};
