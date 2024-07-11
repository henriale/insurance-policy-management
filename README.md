## Requirements

You need docker installed to run the application.

## Running the app

use docker compose to run the NestJS application and also the PostgreSQL database
```bash
$ docker compose up
```
now the application is running on `localhost:3000/`

## Auth

use the following credentials to authenticate:
```
username: carrier
password: pass
```

## Endpoints

```
# get all policies
GET localhost:3000/policies

# create policy
POST localhost:3000/policies

# get policy by id
GET localhost:3000/policies/1

# update policy by id
PATCH localhost:3000/policies/1

# delete policy by id
DELETE localhost:3000/policies/1
```

or you can import the `api-collection.har` file into Postman or Insomnia