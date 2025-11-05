#build stage

FROM node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

#production stage

FROM node:22-alpine 

WORKDIR /app

RUN yarn global add serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]