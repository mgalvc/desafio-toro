FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm ci --only=production

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]