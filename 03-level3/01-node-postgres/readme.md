# Run Node, Postgres - Docker Compose
- On Local PC
- Docker Postgres and Local Node
- Add external volume for postgres data persistence



## 01. On Local PC
- Install Postgres
- Install Node
- Run App

```
# This will create package.json
npm init -y

# Install Types for Node & Express
npm install express
npm install -D typescript ts-node @types/node @types/express

# Initialize TypeScript config
npx tsc --init

# Install project dependencies.
npm install express pg redis @types/express @types/pg @types/redis
```

Setup postgress
```
sudo apt-get install postgresql

sudo /etc/init.d/postgresql start
sudo -u postgres psql

# DROP DATABASE mydatabase;

CREATE DATABASE mydatabase;
CREATE ROLE myuser WITH LOGIN PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
\q

#### IF ISSUE
> psycopg2.errors.InsufficientPrivilege: permission denied for schema public

sudo -u postgres psql
\c td2ctestdb

GRANT ALL ON SCHEMA public TO myuser;
ALTER SCHEMA public OWNER TO myuser;
\q
```

Run
```
# Run
npm start

# OR - Build and Run
npx tsc   # compiles TS -> dist/
node dist/index.js
```



## 2. Docker Postgres and Local Node
- Delete local db
- Install Postgres (Docker)
- Install Node (Local)
- Run App (Local)

```
sudo -u postgres psql
DROP DATABASE mydatabase;
```

```
# 
docker run -d --name postgresdb -e POSTGRES_PASSWORD=password -e POSTGRES_USER=myuser -e POSTGRES_DB=mydatabase -p 5431:5432 postgres:alpine

# OR
docker compose -f compose.old.yaml up -d

docker compose down
```

```
npm start
# Connected to PostgreSQL
```

### Add external volume for postgres data persistence
```
docker volume ls

# check - compose.yaml
# run
docker compose -f compose.yaml up -d
```
