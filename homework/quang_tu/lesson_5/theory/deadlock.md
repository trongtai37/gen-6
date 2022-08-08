#Deadlock

A **deadlock** is a situation in which two computer programs sharing the same resource are effectively preventing each other from accessing the resource, resulting in both programs ceasing to function.

Consider an example when two trains are coming toward each other on the same track and there is only one track, none of the trains can move once they are in front of each other. A similar situation occurs in operating systems when there are two or more processes that hold some resources and wait for resources held by other(s). For example, in the below diagram, Process 1 is holding Resource 1 and waiting for resource 2 which is acquired by process 2, and process 2 is waiting for resource 1. 

```
  Program 1 requests resource A and receives it.
  Program 2 requests resource B and receives it.
  Program 1 requests resource B and is queued up, pending the release of B.
  Program 2 requests resource A and is queued up, pending the release of A.
```

Now neither program can proceed until the other program releases a resource. The operating system cannot know what action to take. At this point the only alternative is to abort (stop) one of the programs.

## Handle deadlock.
To prevent deadlocks, request all necessary resources together. In other words, a process is not allowed to obtain one resource and then request another. If for some reason a process holds a resource and its request for another resource is denied, it must give up the first resource.

Impose a constraint that a process can hold at most one lock at a time. It's also been said, "never call other people's code while holding a lock", unless that code doesn't acquire a lock.

To share resources, prefer alternatives to mutexes or locks. The resource could be replicated. Use a higher-level pattern to synchronize operations. For instance, the pipeline pattern serializes accesses without using mutexes.

To prevent communication deadlocks, at least one process must use non-blocking IO. An alternative is to use separate threads for send and receive operations, so that the process can still send messages while blocked on the receive thread.

The four common ways to handle deadlocks are:
1. **Prevention**: System is designed with constraints to prevent at least one of the conditions required for a deadlock.
2. **Avoidance**: Algorithms decide at runtime to deny a resource request if subsequent requests might lead to a deadlock. Decisions may be conservative resulting in lower resource utilization.
3. **Detection**: Periodically check for deadlocks. Frequent checks imply a performance overhead. Infrequent checks imply deadlocks are not caught soon enough. Use triggers such as a drop in CPU utilization to start a check. Perhaps check when a resource request can't be granted.
4. **Recovery**: Take action to break one of the conditions for a deadlock. One of the processes could be terminated, called victim selection. Or the process is forced to release resources it holds.

Deadlock prevention is easier than deadlock detection.

## Deadlock Prevention

In the deadlock prevention process, the OS will prevent the deadlock from occurring by avoiding any one of the four conditions that caused the deadlock. If the OS can avoid any of the necessary conditions, a deadlock will not occur.

We have 4 ways to prevent it:
### 1. No Mutual Exclusion: 

It means more than one process can have access to a single resource at the same time. It’s impossible because if multiple processes access the same resource simultaneously, there will be chaos. Additionally, no process will be completed. So this is not feasible. Hence, the OS can’t avoid mutual exclusion.

Example: Jack and Jones share a bowl of soup. Both of them want to drink the soup from the same bowl and use a single spoon simultaneously, which is not feasible.

### 2. No Hold and Wait:

To avoid the hold and wait, there are many ways to acquire all the required resources before starting the execution. But this is also not feasible because a process will use a single resource at a time. Here, the resource utilization will be very less.

Before starting the execution, the process does not know how many resources would be required to complete it. In addition to that, the bus time, in which a process will complete and free the resource, is also unknown.

Another way is if a process is holding a resource and wants to have additional resources, then it must free the acquired resources. This way, we can avoid the hold and wait condition, but it can result in starvation.

### 3. Removal of No Preemption

One of the reasons that cause the deadlock is the no preemption. It means the CPU can’t take acquired resources from any process forcefully even though that process is in a waiting state. If we can remove the no preemption and forcefully take resources from a waiting process, we can avoid the deadlock. This is an implementable logic to avoid deadlock.

Example: it’s like taking the bowl from Jones and give it to Jack when he comes to have soup. Let’s assume Jones came first and acquired a resource and went into the waiting state. Now when Jack came, the caterer took the bowl from Jones forcefully and told him not to hold the bowl if you are in a waiting state.

### 4. Removal of Circular Wait

In the circular wait, two processes are stuck in the waiting state for the resources which have been held by each other. To avoid the circular wait, we assign a numerical integer value to all resources, and a process has to access the resource in increasing or decreasing order.

If the process acquires resources in increasing order, it’ll only have access to the new additional resource if that resource has a higher integer value. And if that resource has a lesser integer value, it must free the acquired resource before taking the new resource and vice-versa for decreasing order.