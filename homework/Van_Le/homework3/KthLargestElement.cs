namespace running_app
{
    public class KthLargestElement
    {
        private int[] numsToHandle;
        public int FindKthLargest(int[] nums, int k)
        {
            numsToHandle = nums;
            int size = numsToHandle.Length;
            return QuickSelect(0, size - 1, size - k);
        }

        private int QuickSelect(int left, int right, int kSmallest)
        {
            /*
            Returns the k-th smallest element of list within left..right.
            */

            if (left == right) // If the list contains only one element,
                return numsToHandle[left];  // return that element

            // pick random pivot
            int pivotIndex = 0;
            Random rand = new Random();
            pivotIndex = rand.Next() % (right - left) + left;

            pivotIndex = Partition(left, right, pivotIndex);

            // the pivot is on (N - k)th smallest position
            if (kSmallest == pivotIndex)
                return numsToHandle[kSmallest];
            // go left side
            else if (kSmallest < pivotIndex)
                return QuickSelect(left, pivotIndex - 1, kSmallest);
            // go right side
            return QuickSelect(pivotIndex + 1, right, kSmallest);
        }

        private int Partition(int left, int right, int pivotIndex)
        {
            int pivot = numsToHandle[pivotIndex];
            // 1. move pivot to end
            Swap(pivotIndex, right);
            int store_index = left;

            // 2. move all smaller elements to the left
            for (int i = left; i <= right; i++)
            {
                if (numsToHandle[i] < pivot)
                {
                    if (store_index != i)
                        Swap(store_index, i);
                    store_index++;
                }
            }

            // 3. move pivot to its final place
            Swap(store_index, right);

            return store_index;
        }

        public void Swap(int a, int b)
        {
            int tmp = numsToHandle[a];
            numsToHandle[a] = numsToHandle[b];
            numsToHandle[b] = tmp;
        }
    }
}
