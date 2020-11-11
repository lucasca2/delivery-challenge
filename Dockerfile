FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
