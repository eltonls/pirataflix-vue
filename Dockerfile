FROM node:16-slim AS node-base
WORKDIR /src

# Accept build-time variables
ARG VITE_BASE_URL
ARG VITE_BEARER_TOKEN

# Set environment variables
ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_BEARER_TOKEN=$VITE_BEARER_TOKEN

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# NGINX stage
FROM nginx:stable-alpine3.19-slim AS production-build
EXPOSE 80
WORKDIR /app
COPY --from=node-base /src/dist /usr/share/nginx/html
ADD /config/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
