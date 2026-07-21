# Build stage
FROM node:20-alpine AS build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ENV VITE_BACKEND_URL=/api
RUN npm run build

# Production stage
FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
