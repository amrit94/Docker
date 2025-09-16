## Test Dockerfile

Build and run docker image from Dockerfile
```
docker build -t ap/dockerfile:hi .

docker run --name test1 ap/dockerfile:hi
# Hello World... from my first docker image
```

Remove the image
```
docker rmi -f <id>
```