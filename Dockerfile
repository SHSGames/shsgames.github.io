FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=80

EXPOSE 80

RUN npm run build

CMD [ "node", "." ]