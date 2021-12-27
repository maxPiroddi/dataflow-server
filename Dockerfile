FROM node:16.13.1 as build-env

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install && npm run build

WORKDIR /app

EXPOSE 8080
CMD [ "npm", "run", "start" ]