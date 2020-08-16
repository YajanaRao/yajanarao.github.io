---
title: "Dual table"
categories: technical-concept
---

# Dual Table

## What is DUAL table?

The DUAL is special one row, one column table present by default in all Oracle databases.

- DUAL can be accessed by every user.
- The table has a single `VARCHAR2(1)` column called DUMMY that has a value of 'X'. MySQL allows DUAL to be specified as a table in queries that do not need data from any tables.

By using the DUAL table, you can execute queries that contain functions that do not involve any table like the UPPER() function as follows:

```sql
SELECT
  UPPER('This is a string')
FROM
  dual;
```

Besides calling built-in function, you can use expressions in the SELECT clause of a query that accesses the DUAL table:

```sql
SELECT
  (10 + 5)/2
FROM
  dual;
```
