FROM node:latest as build

WORKDIR /usr/app
COPY . /usr/app

RUN npm ci
RUN npm run build


FROM nginx:latest
EXPOSE 3111
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html
COPY --from=build /usr/app/public /usr/share/nginx/html/public

