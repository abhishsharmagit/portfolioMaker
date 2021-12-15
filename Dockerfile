FROM node:14.15.0-alpine as builder

ENV NODE_ENV=development
WORKDIR /usr/src/app/

RUN yarn global add lerna
COPY . .

RUN yarn install
RUN lerna bootstrap


FROM node:14.15.0-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/src/app/
COPY --from=builder /usr/src/app/ /usr/src/app/
RUN rm -rf ./src
COPY yarn.lock .	
RUN yarn install
RUN ls
