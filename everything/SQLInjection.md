# SQL Injection is one of SQL Vulnerabilities
  
  
  
A SQL injection attack is when **a malicious user enters SQL code as input** on a site in order to bypass the sites security measures. For example, let’s say we have a table storing usernames and passwords, and then a login form on the home site of a page. We may search for the user using a query such as: 

```sql
SELECT * FROM users
WHERE username = username AND password = password;
```
A user named Harry might go to this site and type harry as a username and 12345 as a password, in which case the query would look like this:
```sql
SELECT * FROM users
WHERE username = "harry" AND password = "12345";
```
A hacker, on the other hand, might type harry" -- as a username and nothing as a password. It turns out that -- stands for a comment in SQL, meaning the query would look like:
```sql
SELECT * FROM users
WHERE username = "harry"--" AND password = "12345";
```
Because in this query the password checking has been commented out, the hacker can log into Harry’s account without knowing their password. To solve this problem, we can use:  
+ Escape characters to make sure SQL treats the input as plain text and not as SQL code.
+ An abstraction layer on top of SQL which includes its own escape sequence, **so we don’t have to write SQL queries ourselves**.