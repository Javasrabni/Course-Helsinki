# Stage 1: Test Stage
FROM node:24 AS test-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

# Jalankan pengujian
RUN npm run test

# Stage 2: Build Stage
FROM test-stage AS build-stage

ENV VITE_BACKEND_URL=http://localhost:3000

# Ubah dari 'npm run test' menjadi 'npm run build'
RUN npm run build

# Stage 3: Serve Stage
FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
