# Test Expess on Local and Docker
https://www.youtube.com/watch?v=DQJNtDm5qy0

## 01. On Local PC
```
npm init -y
npm install express

# Run
node index.js
```

### 02. On Docker
```
# Remove node_modules folder
rm -rf node_modules/

# Create docker image from Dockerfile
docker build -t ap/exp:v1 .

# Run container in background
docker run -d -p 3000:3000 ap/exp:v1
```

Visit: http://127.0.0.1:3000

```
# Stop
docker stop wwer43
```


