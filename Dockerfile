# Set the base image to 
FROM node/8

MAINTAINER nishanif

RUN mkdir /var/tmp/simple_app

COPY . /var/tmp/simple_app

WORKDIR /var/tmp/simple_app

EXPOSE 3000

CMD["node index.js"]