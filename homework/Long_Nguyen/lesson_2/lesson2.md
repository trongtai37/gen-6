# Lesson 3

## Problem Description:
Imagine you have a 200 GB file on disk, with one string per line. Explain how you would sort the file with only 2 GB RAM machine.

## Solution:
1) Devide 200GB file into 100 files, each file has size of 2GB (equals to the given RAM).
2) Sort each chunk one by one by using any sorting algorithm has time complexity of NlogN and space complexity of O(1) (eg: Merge sort, Quick Sort,...). Then save sorted data in disk. After this step, we are having K-sorted lists.
3) Merge K-sorted lists received from step 2 by using the technique of Heap Sort.

## Time complexity:
- Assume that after step 1, we have K chunk files. Each chunk file has N elements
- So in step 2, to sort K chunk files, we have time complexity O(K * NlogN)
- In step 3, to merge K-sorted lists using technique of Heap Sort. We have time complextity of O(K * NlogK)

Total time complexity should be O(K * (NlogN + NlogK))

## Space complexity:
Total space complexity should be O(K) - where K is the number of chunk files

## Reference:
- Merge sort: https://www.geeksforgeeks.org/merge-sort/
- Quick sort: https://www.geeksforgeeks.org/quick-sort/
- Merge K-sorted arrays: https://www.geeksforgeeks.org/merge-k-sorted-arrays-set-2-different-sized-arrays/