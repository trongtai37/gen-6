// Solution for https://leetcode.com/problems/sliding-window-maximum/

const front = (dequeue) => dequeue[0];
const back = (dequeue) => dequeue[dequeue.length - 1];

var maxSlidingWindow = function (nums, k) {
    const ans = [], dequeue = [];

    for (let i = 0; i < nums.length; i++) {
        while (dequeue.length && nums[i] > nums[back(dequeue)]) {
            dequeue.pop();
        }
        dequeue.push(i);

        if (front(dequeue) < i - k + 1) dequeue.shift();
        if (k <= i + 1) ans.push(nums[front(dequeue)]);
    }

    return ans;
};