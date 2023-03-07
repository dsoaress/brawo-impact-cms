FROM node:18 as base

FROM base as builder

WORKDIR /home/node/app
COPY package.json yarn.lock ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ARG PORT

ENV PORT=$PORT
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE $PORT

CMD ["node", "dist/server.js"]
