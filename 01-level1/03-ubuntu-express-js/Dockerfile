FROM ubuntu

RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install nodejs -y

WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
