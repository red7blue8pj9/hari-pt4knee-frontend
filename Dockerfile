# FROM node:12.7-alpine AS build
# WORKDIR /edu/front
# COPY package*.json ./
# RUN npm install
# COPY . /edu/front
# RUN npm install
# RUN npm install -g @angular/cli
# CMD ng serve --host 0.0.0.0


# FROM nginx:alpine

# COPY nginx.conf /etc/nginx/nginx.conf

# WORKDIR /usr/share/nginx/html

# COPY dist/edudw .

# EXPOSE 8043

# use this build portal first
# ng build --delete-output-path=true --aot --base-href --deploy-url /redwine/dev/portal/

FROM pierrezemb/gostatic

COPY dist/pt4knee /srv/http
EXPOSE 8043
