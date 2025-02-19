FROM node:lts

WORKDIR /app
COPY . /app

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "dev"]
