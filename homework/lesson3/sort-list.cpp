/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* merge(ListNode* left, ListNode* right) {
        ListNode* head = new ListNode();
        ListNode* cur = head;

        while(left && right) {
            if (left->val < right->val) {
                cur->next = left;
                left = left->next;
            } else {
                cur->next = right;
                right = right->next;
            }

            cur = cur->next;
        }

        while(left) {
            cur->next = left;
            left = left->next;

            cur = cur->next;
        }

        while(right) {
            cur->next = right;
            right = right->next;

            cur = cur->next;
        }

        cur->next = nullptr;
        return head->next;
    }

    ListNode* mergeSort(ListNode* node) {
        if (!node || !node->next)
            return node;

        ListNode* left = node;
        ListNode* cur = node;
        ListNode* pre = nullptr;

        while(node && node->next) {
            node = node->next->next;
            pre = cur;
            cur = cur->next;
        }

        cur = node ? cur : pre;

        ListNode* right = cur->next;
        cur->next = nullptr;

        left = mergeSort(left);
        right = mergeSort(right);

        return merge(left, right);
    }

    ListNode* sortList(ListNode* head) {
        if(!head || !head->next)
            return head;

        return mergeSort(head);
    }
};
