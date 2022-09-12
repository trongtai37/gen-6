//linkedList solution =================================================
class MyCircularQueue {
public:
    MyCircularQueue(int k) {
        queueLength = k;
    }

    bool enQueue(int value) {
        if(isFull())
            return false;

        if (isEmpty()) {
            initQueue(value);
        } else {
            ListNode* node = new ListNode(value, nullptr);
            back->next = node;
            back = back->next;
        }

        currentSize++;

        return true;
    }

    bool deQueue() {
        if(isEmpty())
            return false;

        ListNode* term = queue;
        queue = queue->next;

        delete term;
        currentSize--;

        return true;
    }

    int Front() {
        if(isEmpty())
            return -1;

        return queue->val;
    }

    int Rear() {
        if(isEmpty())
            return -1;

        return back->val;
    }

    bool isEmpty() {
        return currentSize == 0;
    }

    bool isFull() {
        return currentSize == queueLength;
    }

private:
    struct ListNode {
        int val;
        ListNode *next;
        ListNode() : val(0), next(nullptr) {}
        ListNode(int x) : val(x), next(nullptr) {}
        ListNode(int x, ListNode *next) : val(x), next(next) {}
    };

    int queueLength = 0;
    int currentSize = 0;
    ListNode* queue;
    ListNode* back;

    void initQueue(int val) {
        queue = new ListNode(val);
        back = queue;
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */

//vector solution =====================================================
lass MyCircularQueue {
public:
    MyCircularQueue(int k) {
        queueLength = k;
    }

    bool enQueue(int value) {
        if(isFull())
            return false;

        q.push_back(value);

        return true;
    }

    bool deQueue() {
        if(isEmpty())
            return false;

        q.erase(q.begin());

        return true;
    }

    int Front() {
        if(isEmpty())
            return -1;

        return q.front();
    }

    int Rear() {
        if(isEmpty())
            return -1;

        return q.back();
    }

    bool isEmpty() {
        return q.size() == 0;
    }

    bool isFull() {
        return q.size() == queueLength;
    }

private:
    int queueLength = 0;
    vector<int> q;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */
