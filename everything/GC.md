# Gabage Collection
If you are not reachable from root set(set of variables from stack), I delete you to make the earth cleaner!!!  
![image](imgs/Animation_of_the_Naive_Mark_and_Sweep_Garbage_Collector_Algorithm.gif)  
Naive mark-and-sweep in action on a **heap** containing eight objects. Arrows represent object references. Circles represent the objects themselves. Objects #1, #2, #3, #4, and #6 are strongly referenced from the root set. On the other hand, objects #5, #7, and #8 are not strongly referenced either directly or indirectly from the root set; therefore, they are garbage.

## What is it?
Garbage collection (GC) is a memory recovery feature built into programming languages such as C# and Java. A GC-enabled programming language includes one or more garbage collectors (GC engines) that **automatically free up memory space that has been allocated to objects no longer needed by the program**. The reclaimed memory space can then be used for future object allocations within that program.

In older programming languages like C and C++, developers must manually delete objects and free up memory. Replying on manual proccess made it easy to raise the bugs into the code, some of which can have serious consequences. For example, if a developer forget to free up memory, it could leading to memory leak problem.

## mark-sweep algorithm  
```py
- Collect all root objects
- Mark all live ojbects in heap pool as Unreachable
- for node in root object collection:
    Mark(node)

Mark(node):
    markedBit(node) is True
    for each v referenced by node:
        if markedBit(v) is True:
            Mark(v)
Sweep():
    for each object in live objects:
        if marketBit(object) is True:
            marketBit(object) = False
        else:
            release object from heap pool
Main():
    - for node in root object collection:
        Mark(node)
    Sweep()
```


### Advantages of Mark and Sweep Algorithm:
* It handles the case with **cyclic references**, even in the case of a cycle, this algorithm never ends up in an infinite loop.
* There are no additional overheads incurred during the execution of the algorithm.

### Disadvantages of the Mark and Sweep Algorithm:
* The main disadvantage of the mark-and-sweep approach is the fact that  normal program execution is suspended while the garbage collection algorithm runs.
* May cause the **OutOfMemory error** when allocate new object (or Fragmentation Failure).