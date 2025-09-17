# Multi Stage Docker Build - Typescript
- Stage 1: Build TS project using dev-dependencies
- Stage 2 (Runner): Run the app using only production dependencies


## 01. On Local PC
```
# This will create package.json
npm init -y

# Install Types for Node & Express
npm install express
npm install -D typescript ts-node @types/node @types/express

# Initialize TypeScript config
npx tsc --init

# Run
npx ts-node src/index.ts

# OR - Build and Run
npx tsc   # compiles TS -> dist/
node dist/index.js
```

## 02. On Docker
Manually - remove node_modules folder

```
rm -rf node_modules/
rm -rf dist/
```

### Single-stage: Contains unwanter files and packages

Build & run
```
# Create docker image from Dockerfile
docker build -t ap/ts:v1 -f Dockerfile.old .

# Run container in background
# docker run -p <pc_port>:<docker_port> <app_name>
docker run --name tscript1 -d -p 3000:3000 ap/ts:v1
```
Visit: http://127.0.0.1:3000


### Multi-stage docker image: Production use
Build & run
```
# Create docker image from Dockerfile
docker build -t ap/ts:v2 -f Dockerfile .

# Run container in background
# docker run -p <pc_port>:<docker_port> <app_name>
docker run --name tscript2 -d -p 3000:3000 ap/ts:v2
```
Visit: http://127.0.0.1:3000

## Cleanup
```
docker stop tscript1
docker rm tscript1
docker rmi -f <id>
```