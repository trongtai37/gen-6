# Shared Lock and Exclusive Lock

### Shared lock (Read lock)
When a transaction reads a row, the isolation level of the transaction determines if a read lock is acquired. Once a row is read locked, no other transaction can obtain a write lock on it. Acquiring a read lock ensures that a different transaction does not modify or delete a row while it is being read.

Read locks can be held for different durations. At isolation levels 2 and 3, any read locks acquired by a transaction are held until the transaction completes through a COMMIT or a ROLLBACK. These read locks are called long-term read locks.

```
- Used when a transaction wants to read data.
- Because read only is allowed, any other transactions that want to write within the read period are not allowed.
- Shared lock allows multiple transactions to read data at the same time.
```

It ensures the integrity of the data (_data integrity_). The read process takes place completely, not interrupted by the write process.

### Exclusive Lock (read-write lock)

A transaction acquires a write lock whenever it inserts, updates, or deletes a row. This is true for transactions at all isolation levels, including isolation level 0 and snapshot isolation levels. No other transaction can obtain a read, intent, or write lock on the same row after a write lock is acquired. Write locks are also referred to as exclusive locks because only one transaction can hold an exclusive lock on a row at any time. No transaction can obtain a write lock while any other transaction holds a lock of any type on the same row. Similarly, once a transaction acquires a write lock, requests to lock the row by other transactions are denied.

```
- Used when a transaction wants to read and write data.
- Only one transaction have right use Exclusive Lock in this data.
- Other than that, no other transaction can apply Shared lock.
- It prevents other transactions from taking over the execution time.
```

When we apply:
- Shared Lock we still apply other Shared Lock but can not apply Exclusive lock
- Exclusive Lock we can not apply any new Lock.

=> Only a shared lock can be shared with multi-transactions. Also all other combinations are not possible. If there is a shared lock, there is no exclusive lock and vice versa.

### Example

We have table `User`:

| UserName | Order |
| --- | --- |
| A | 2 |
| B | 5 |
| C | 4 | 

At time T1:
- User A add a new order: Create query Update - write data => Acquire exclusive lock.
```sql
UPDATE User
SET Order = 3
WHERE UserName = 'A';
```
- **T1 start exclusive lock of A.**

At time T2:

- **T1 exclusive lock of A: Done**
- The transaction of user A done. Now table `User` became:

| UserName | Order |
| --- | --- |
| A | 3 |
| B | 5 |
| C | 4 | 

At time T3:
- User A check his order. This process is read-lock => Acquire shared lock.

```sql
SELECT Order
FROM User
WHERE UserName = 'A';
```

- **T3 start shared lock of A.**

At time T4:
- User B going to check his order he placed last night. This process is read-lock => Acquire shared lock.

```sql
SELECT Order
FROM User
WHERE UserName = 'B';
```
- **T3 shared lock of A: up**
- **T4 start shared lock of B**

At time T5:
- **T3 shared lock of A: up**
- **T4 shared lock of B: up**
- User C want to transfer 2 order of him to B. That mean C have to update data of B. But at this time B still reading his order detail. So transaction exclusive lock of C can not execute.

At time T6:

- **T3 shared lock of A: done**
- **T4 shared lock of B: done**
- User C continue transfer 2 order to B. Now because at B's data not have any transaction. So C now can acquire exclusive lock.

```sql
UPDATE User
SET Order = 5
WHERE UserName = 'A';

UPDATE User
SET Order = 2
WHERE UserName = 'C';
```
- **T6 exclusive lock of C: start**

At time T7:
- **T6 exclusive lock of C: done**
- Now table became

| UserName | Order |
| --- | --- |
| A | 5 |
| B | 5 |
| C | 2 | 