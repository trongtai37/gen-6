### Question: Imagine you have a 200 GB file on disk, with one string per line. Explain how you would sort the file with only 2 GB RAM machine.

### Idea: External sorting

We divide our large file into many smaller files that having sizes equal to the size of RAM and sort each file.
After having all files sorted, we use many pointers strategy to combine them into a sorted one.

### Detail steps

- Divide 200GB file to 100 files, each file has size of 2GB.

- Sort these temporary files one by one using quick sort (or anything else).

- Initialize 100 pointers, each pointer point to the first line of each file, and create a new file witch capacity of 200GB.

- Find the smallest line from 100 pointers and copy it to new 200GB file, increase next line of chosen pointer.

- Same process is followed until all pointers go to the end of file.

- We have a new 200GB file with all line sorted in ascending order.

### Runtime complexity

With n is the size of the large file.

- Split large file into smaller files: O(n)

- Sort files: O(nlogn)

- Combined all files: O(n)

=> O(nlogn)

### Space complexity

With n is the size of the large file.

- Split large file into smaller files: O(n)

- Sort files: O(logn) (quicksort)

- Combined all files: O(n)

=> O(n)
