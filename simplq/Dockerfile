FROM node:15.8.0 AS build

ENV BASE_URL "https://devbackend.simplq.me/v1"

WORKDIR /build
COPY . .
RUN npm install
RUN npm build

FROM nginx:1.19.6-alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /app
COPY --from=build  /build/build/ .
