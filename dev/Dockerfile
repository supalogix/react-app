FROM node:8.11

WORKDIR /app

COPY . .

RUN npm install -g http-server \
    && yarn 

EXPOSE 8080

#CMD [ "tail", "-f", "/dev/null" ]
CMD [ "http-server", "dist"]