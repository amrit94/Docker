## Dealing with ENV file
docker run --name tscript2 -d -p 3000:3000 -e PORT=3000 ap/ts:v2
docker run --name tscript2 -d -p 3000:3000 -e PORT=3000 -e X=1 ap/ts:v2
docker run --name tscript2 -d -p 3000:3000 --envfile=./.env ap/ts:v2


