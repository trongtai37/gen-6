// Because sliding window will always maintain a distance, let's say distance k
// So this problem should be solved by using 2 pointers (left and right) maintaing the distance of the sliding window.
// The right pointer will be shifted from the begin to the end of array nums, each shifted step will enqueue an item at which the right pointer is standing
// such that the end of the queue will always be the largest number.
// When the sliding window becomes full-size k within the array nums, just dequeue an item from the queue (always get the largest number) and supply that item
// to the output

public class MaxSlidingWindowSolution
{
    public int[] MaxSlidingWindow(int[] nums, int k)
    {
        // 1/ declaring an output as a list to always ensure that output will never limit its size (because output size will always be flexible)
        var output = new List<int>();

        // 2/ to solve this problem, let's use dequeue as a data structure as dequeue can be poped at both ends of the queue
        var deQueue = new LinkedList<int>();
        int left = 0;
        int right = 0;

        while (right < nums.Length)
        {
            // 3/ to ensure that the last item of the queue is the largest number, so whenever enqueue a new item, just make the comparison between the input
            // item and every single top item of the queue, if the input item is larger, just pop the top item of the current queue.
            while (deQueue.Count > 0 && nums[right] >= nums[deQueue.Last.Value])
                deQueue.RemoveLast();

            // 4/ when making sure that no top item from the current queue is larger than the item from array nums that the right pointer is standing at,
            // just enqueue the larger one.
            deQueue.AddLast(right);

            // 5/ when the current left pointer moved 1 step, just dequeue from the current queue 1 item.
            if (left > deQueue.First.Value) deQueue.RemoveFirst();

            // 6/ when the sliding window is at its maximum size within the nums array, insert to the output and move left 1 step.
            if (right + 1 >= k)
            {
                output.Add(nums[deQueue.First.Value]);
                left++;
            }

            // always move right since we don't want this app to loop forever, right?
            right++;
        }

        // just convert the type for output to be the fixed-size array as the requirement of this solution.
        return output.ToArray();
    }
}
