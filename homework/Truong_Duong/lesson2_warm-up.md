[//]: # (write the solution as much detail as possible &#40;explanation + runtime + ...&#41;)

## Lesson 2: Warm up question

### Problem

Question: **Imagine you have a 200 GB file on disk, with one string per line. Explain how you would sort the file with only 2 GB RAM machine.**

Assume that 200GB file have total N blocks, and 2GB have M blocks

### Solution

- The main is idea is to use `external sorting`, it have 2 main steps:
  - **Step 1**: Generate temporary sorted files chunks
    - Divide the source file into 100 small temporary files each of size 2GB
    - Sort these temporary files one bye one using the ram individually (Any sorting algorithm : quick sort, merge sort).

```text
i = 0;
while (not end of file):
    - Read M blocks from file into RAM, (or the the remaining parts of the file)
    - Sort internally data at RAM using any optimized sorting algorithm (Quick sort, merge sort, ...)
    - Write back the sorted file into disk
    - i = i + 1
```

  - **Step 2**: Merge the sorted chunked into ones
    - a. Since the RAM can only contain M blocks, we need to load first `M - 1` blocks from disk, and one block for output buffer
      - Read the first `N / (M - 1)` of each sorted chunk
    - b. Perform a k-way merge and store the result in the output buffer. Whenever the output buffer fills, write it to the final sorted file and empty it. Whenever any of the input buffers empties, fill it with the next part of that chunk until no more data from the chunk is available.
    - c. If the number of sorted chunks still greater than M, repeat step `a` again. In general, we have to perform `log(M-1) (N/M)` times here. 


### Complexity

- The main cost is the number of block accesses. 
  - In the first steps, to create sorted file chunks, we need N block accesses for both reading data and writing data back to disk => `2N`
  - In the second steps, on each loop, we need to read and write all block back => `2N`
    - The number of loop is `log (M-1) (N/M)`
- Therefore, number of block accesses needed in this algorithm is: `2N + 2N*log (M-1) (N/M)`

### Reference

- [External sorting](https://en.wikipedia.org/wiki/External_sorting)
- [Sorting larger file with smaller RAM](https://www.geeksforgeeks.org/sorting-larger-file-with-smaller-ram/)