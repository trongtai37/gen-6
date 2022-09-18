public class KthLargestElement {
    public int findKthLargest(int[] nums, int k) {
        return quickSelect(nums, 0, nums.length - 1, nums.length - k);
    }

    private int quickSelect(int[] arr, int startId, int endId, int pos) {
        while (true) {
            int pivotId = startId;
            int leftId = startId + 1;
            int rightId = endId;

            while (leftId  <= rightId) {
                if (arr[leftId] > arr[pivotId] && arr[rightId] < arr[pivotId]) {
                    swap(arr, leftId, rightId);
                }
                if (arr[leftId] <= arr[pivotId]) {
                    leftId++;
                }
                if (arr[rightId] >= arr[pivotId]) {
                    rightId--;
                }
            }
            swap(arr, pivotId, rightId);

            if (rightId == pos) {
                return arr[rightId];
            } else {
                if (rightId < pos) {
                    startId = rightId + 1;
                } else {
                    endId = rightId - 1;
                }
            }
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
