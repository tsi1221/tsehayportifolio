FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN mkdir -p /etc/nginx/ssl
COPY ssl/devprofolioo.crt /etc/nginx/ssl/
COPY ssl/devprofolioo.key /etc/nginx/ssl/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html