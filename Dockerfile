FROM node:18-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

EXPOSE  3002

CMD ["npm", "start"]


