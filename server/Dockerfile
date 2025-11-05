FROM node:22-alpine

WORKDIR /app   

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "dev"]