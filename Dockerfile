FROM node:16-slim AS node-base

WORKDIR /src

#Copiando primeiramente os packages para tirar vantagem do cache do docker
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#NGINX stage
FROM nginx:stable-alpine3.19-slim AS production-build

EXPOSE 80

WORKDIR /app

COPY --from=node-base /src/dist /usr/share/nginx/html

ADD /config/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]