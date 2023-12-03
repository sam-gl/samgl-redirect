FROM node:lts-alpine

WORKDIR /home/node/app
COPY . .
RUN npm install

CMD npm run start