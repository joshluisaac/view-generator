#build application dist within docker container

FROM node:11.12.0-alpine as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build


#FROM nginx:alpine
#COPY --from=build-deps /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


CMD ["node", "./dist/index.js"]