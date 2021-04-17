FROM node:14.16-alpine AS build

ARG BASE_URL="https://devbackend.simplq.me/v1"

RUN echo ${BASE_URL}

RUN echo "BASE_URL=${BASE_URL}" > .env

WORKDIR /build
COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.19.6-alpine

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

WORKDIR /app
COPY --from=build  /build/build/ .