# Test Expess on Local and Docker
- Using `ubuntu` base image - this will result in bigger image size
- Install any nodejs


## 01. On Local PC
```
# This will create package.json
npm init -y

# Install express
npm install express

# Run
node index.js
# OR
npm start
```

## 02. On Docker
Manually - remove node_modules folder

```
rm -rf node_modules/
```

Build & run
```
# Create docker image from Dockerfile
docker build -t ap/exp:v2 .

# Run container in background
# docker run -p <pc_port>:<docker_port> <app_name>
docker run --name express2 -d -p 3000:3000 ap/exp:v2
```

Visit: http://127.0.0.1:3000

Cleanup
```
docker stop express1
docker rm express1
docker rmi -f <id>
```


