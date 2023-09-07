FROM node:16 

COPY . /app
WORKDIR /app

RUN yarn && yarn web:prod

EXPOSE 8151
ENTRYPOINT [ "yarn", "web:prod:serve" ]