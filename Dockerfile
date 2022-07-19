FROM node:16.15.0-slim
ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY json-server json-server
COPY angular.json angular.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.json tsconfig.json
COPY set-env.ts set-env.ts
COPY src src

EXPOSE 4040
EXPOSE 6060

CMD [ "npx", "concurrently",  "npm run api", "npm start" ]
