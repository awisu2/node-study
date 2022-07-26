# node

```bash
# get
curl localhost:3000/users/
# post
curl -X POST -H "Content-Type: application/json" -d '{"id" : 10 , "name" : "z"}' localhost:3000/users/
# update
curl -X PUT -H "Content-Type: application/json" -d '{"id" : 10 , "name" : "xxxxx"}' localhost:3000/users/10
# get
curl -X localhost:3000/users/10
# delete
curl -X DELETE localhost:3000/users/10
```
