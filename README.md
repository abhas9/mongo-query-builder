# mongo-query-builder
POC for generating mongo query from javascript conditional expressions.

# Usage

```var query = QueryBuilder.build('a >= (b+c) && b == "test"')```