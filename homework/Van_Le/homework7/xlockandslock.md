# XLock and SLock in Database

## Situattion
We usually interact with the database via INSERT/UPDATE/DELETE... statement without explicit declare and auto commit.

### Example
Look at this query
```sql
UPDATE TABLE X SET COLUMN = 'Y' WHERE ID = 1;
```

The below query can be executed like this
```sql
START TRANSACTION;
UPDATE TABLE X SET COLUMN = 'Y' WHERE ID = 1;
COMMIT;
```

So below the database level, transactions will be received and multi-thread processing will be performed. Let's say, if multi-threading is not well handled, it will lead to many unforeseen risks. Therefore, the simple solution to handle this issue is sync/lock.
There are also many type of locks. But in this article, two lock modes will be covered: exclusive lock and shared lock.

## Shared lock
It can also be known as read lock which can support read integrity. That can ensure a record is not in process of being updated during a read-only request. Besides, shared locks can also be used to prevent any kind of updates of record. So that means the shared lock ensures data integrity.

## Exclusive lock
With the Exclusive Lock, a data item can be read as well as written. Only one transaction has the right to obtain an exclusive lock on that data. No other transaction can apply shared lock.