### Deadlock in Database

## Deadlock?
Deadlocking occurs when two or more user processes have locks on separate objects and each process is trying to acquire a lock on the object that the other process has locked. When this happens, SQL Server resolves the deadlock by automatically aborting one process, the "victim" process, allowing the other processes to continue.

The aborted transaction is rolled back and an error message is sent to the user of the aborted process. Generally, the transaction that requires the least amount of overhead to roll back is the transaction that is aborted.

Deadlocks can cause a strain on a SQL Server's resources, especially CPU utilization.

## How to prevent?
- Ensure the database design is properly normalized.
- Develop applications to access server objects in the same order each time.
- Do not allow any user input during transactions.
- Avoid cursors.
- Keep transactions as short as possible.
- Reduce the number of round trips between your application and SQL Server by using stored procedures or by keeping transactions within a single batch.
- Reduce the number of reads. If you do need to read the same data more than once, cache it by storing it in a variable or an array, and then re-reading it from there.
- Reduce lock time. Develop applications that obtain locks at the latest possible time, and release them at the earliest possible time.
- If appropriate, reduce lock escalation by using ROWLOCK or PAGLOCK.
- If the data being locked is not modified very frequently, consider using NOLOCK to prevent locking.
- If appropriate, use the lowest possible isolation level for the user connection running the transaction.
- Consider using bound connections.