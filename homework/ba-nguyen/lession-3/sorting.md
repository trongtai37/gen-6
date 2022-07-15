## Sorting

### _Interchange Sort_

> **Interchange sort** orders a list alphabetically or in order of size by starting at the first element of the list, finding all the unsorted element with that element and then swapping each other. The process is repeated until the list is sorted

For example, to sort the list by ascending order

```bash
1 3 2 10 5 -1
```

You define two variables `i`, `j`. The `i` will point to first position and the `j` will loop from `i + 1` to end of list. Then compare each other if it doesn't pass the condition, swap position of them.

The process is run as below:

```bash
1 3 2 10 5 -1
i j
compare: i > j => false
```

```bash
1 3 2 10 5 -1
i   j
compare: i > j => false
```

```bash
1 3 2 10 5 -1
i     j
compare: i > j => false
```

```bash
1 3 2 10 5 -1
i        j
compare: i > j => false
```

```bash
1 3 2 10 5 -1
i           j
compare: i > j => true => swap(i, j)
new list: -1 3 2 10 5 1
```

```bash
-1 3 2 10 5 1
   i j
compare: i > j => true => swap(i, j)
new list: -1 2 3 10 5 1
```

```bash
-1 2 3 10 5 1
   i   j
compare: i > j => false
```

```bash
-1 2 3 10 5 1
   i      j
compare: i > j => false
```

```bash
-1 2 3 10 5 1
   i        j
compare: i > j => true => swap(i, i)
new list: -1 1 3 10 5 2
```

```bash
-1 1 3 10 5 2
     i j
compare: i > j => false
```

```bash
-1 1 3 10 5 2
     i    j
compare: i > j => false
```

```bash
-1 1 3 10 5 2
     i      j
compare: i > j => true => swap(i, j)
new list: -1 1 2 10 5 3
```

```bash
-1 1 2 10 5 3
       i  j
compare: i > j => true => swap(i, j)
new list: -1 1 2 5 10 3
```

```bash
-1 1 2 5 10 3
       i    j
compare: i > j => true => swap(i, j)
new list: -1 1 2 3 10 5
```

```bash
-1 1 2 3 10 5
         i  j
compare: i > j => true => swap(i, j)
new list: -1 1 2 3 5 10
=> ascending order result:  -1 1 2 3 5 10
```

- Runtime complexity: O(n^2)
- Extra space: O(1)

**Setting:**
`@param a[]: number[]`
`@param n: number`

```bash
void interchangeSort(int a[], int n) {
    for(int i = 0; i < n - 1; i++) {
        for(int j = i + 1; j < n; j++) {
            if(a[i] > a[j]) {
                swap(a[i], a[j])
            }
        }
    }
}
```

### _Selection Sort_

> **Selection sort** is an effective and efficient sort algorithm based on comparison operatios. You need to select the smallest element in the array and move it to the beginning of the array by swapping with the front element. In each iteration, selection sort selects an element and places it in the appropriate position.

For example, to sort the list by ascending order:

```bash
2 3 -5 4 1
```

You define two variables `i` and `posMin`, `posMin` to save the position of min element for each iteration in range [i + 1, n].
You can see the operation below:

```bash
initial:
posMin
  2    3    -5    4    1
  i
```

```bash
           posMin
  2    3    -5    4    1
  i
  After finding position of min element
  swap(i, posMin)
  new list: -5    3    2    4    1
```

```bash
                     posMin
  -5    3    2    4    1
        i
  After finding position of min element
  swap(i, posMin)
  new list: -5    1    2    4    3
```

```bash
           posMin
  -5    1    2    4    3
             i
  there is no element smaller then i
```

```bash
                     posMin
  -5    1    2    4    3
                  i
  After finding position of min element
  swap(i, posMin)
  new list: -5    1    2    3    4
```

- Runtime complexity: O(n^2)
- Extra space: O(1)

**Setting:**
`@param a[]: number[]`
`@param n: number`

```bash
void selectionSort(int a[], int n) {
    for(int i = 0; i < n - 1; i++) {
        int posMin = i
        for(int j = i + 1; j < n; j++) {
            if(a[posMin] > a[j]) {
                posMin = j
            }
        }
        swap(a[posMin], a[i])
    }
}
```

### _Insertion Sort_

> **Insertion sort** is a basic sorting algorithm that sequentially sorts each item in the final sorted array or list. It's quite abstract algorithm, so you can read more [here](https://www.simplilearn.com/tutorials/data-structure-tutorial/insertion-sort-algorithm).

**How does it work? Watch the example in below:**
First element is initial sorted, so you have to start with second element

```bash
  x=6
5 6 9 2 1
i
compare: x < i => false => increase i, x by 1 position
```

```bash
    x=9
5 6 9 2 1
  i
compare: x < i => false => increase i, x  by 1 position
```

```bash
      x=2
5 6 9 2 1
    i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
      x=2
5 6 9 9 1
  i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
      x=2
5 6 6 9 1
i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
      x=2
5 5 6 9 1
i
here i is in first of array, so you do a[i] = x
```

```bash
        x=1
2 5 6 9 1
      i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
        x=1
2 5 6 9 9
    i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
        x=1
2 5 6 6 9
  i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
        x=1
2 5 5 6 9
i
compare: x < i => true => a[i + 1] = a[i] and decrease i by 1
```

```bash
        x=1
2 2 5 6 9
i
here i is in first of array, so you do a[i] = x
new array: 1 2 5 6 9
```

- Runtime complexity: O(n^2)
- Extra space: O(1)

**Setting:**
`@param a[]: number[]`
`@param n: number`

```bash
void insertionSort(int a[], int n) {
    for(int i = 1; i < n; i++) {
        int x = a[i]
        int pos = i - 1
        while(pos >= 0 && a[pos] > x) {
            a[pos - 1] = a[pos]
            pos--
        }
        a[pos + 1] = x
    }
}
```

### _Bubble Sort_

> **Bubble sort** is a sorting algorithm that is similiar to [**Interchange sort**](#_Interchange_Sort__1), the big different between 2 algorithm here is the **Bubble sort** like bubbles floating up so the sorting is started to compare with the end element of array.

The example is below and you can try to write out step by step of algorithm:

```bash
3 -1 -5 10 -5 4 1
```

- Runtime complexity: O(n^2)
- Extra space: O(1)

**Setting:**
`@param n: number`
`@param a[]: number[]`

```bash
void bubbleSort(int a[], int n) {
    for(int i = 0; i < n; i++) {
        for(int j = n - 1; j > i; j--) {
            if(a[j] < a[j - 1]) {
                swap(a[j], a[j - 1])
            }
        }
    }
}
```

### _Quick Sort_

> **Quick sort** is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays.

**How does it work? Watch the example in below:**
**Step 1** - Pick the middle index value called `mid`.
**Step 2** − Take two variables to point `left` and `right` of the list excluding `mid`
**Step 3** − `left` points to the low index
**Step 4** − `right` points to the high
**Step 5** − while value at `left` is less than `mid` move right
**Step 6** − while value at `right` is greater than `mid` move left
**Step 7** − if both step 5 and step 6 does not match swap `left` and `right`
**Step 8** − if `left` ≥ `right`, the point where they met is new `mid`

You can inform here to know more about the example [Example Quick Sort: Dividing Subarrays](https://towardsdatascience.com/an-overview-of-quicksort-algorithm-b9144e314a72?gi=fbbd904bc74#:~:text=Quicksort%20is%20a%20fast%20sorting,them%2C%20and%20then%20recombining%20them.)

- Runtime complexity:
  - Average case: O(n\*log(n))
  - Worst case: O(n^2)
- Extra space: O(log(n))

**Setting:**
`@param a[]: number[]`
`@param left: number`
`@param right: number`

```bash
void quickSort(int a[], int left, int right) {
    int i = left
    int j = right
    int mid = (left + right) / 2
    int pivot = a[mid]

    do {
        while(a[i] < x) i++
        while(a[j] > x) j--
        if(i <= j) {
            swap(a[i], a[j])
            i++
            j--
        }
    } while(j < j)

    if(left < j) quickSort(a, left, j)
    if(i < right) quickSort(a, i, right)
}
```
