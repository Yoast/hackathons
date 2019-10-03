FROM node:10

ENV PORT 3001

EXPOSE 3001

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .
RUN yarn run build

CMD ["node", "dist/"]
