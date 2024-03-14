FROM node:18.19.1-alpine as builder
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

FROM nginx:1.25.4
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80