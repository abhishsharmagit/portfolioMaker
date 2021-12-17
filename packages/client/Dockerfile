FROM node:14.15.0-alpine as builder

ENV NODE_ENV=development
WORKDIR /usr/src/app/

ARG AUTH_URL
ARG BACKEND_URL

ENV AUTH_URL=${AUTH_URL}
ENV BACKEND_URL=${BACKEND_URL}

RUN yarn global add next
RUN yarn global add lerna
COPY . .

RUN yarn install
RUN lerna bootstrap
RUN yarn build


FROM node:14.15.0-alpine as production

ARG AUTH_URL
ARG BACKEND_URL

ENV AUTH_URL=${AUTH_URL}
ENV BACKEND_URL=${BACKEND_URL}

ENV NODE_ENV=production

WORKDIR /usr/src/app/
COPY --from=builder /usr/src/app/packages/client /usr/src/app/
RUN rm -rf ./src
COPY yarn.lock .	
RUN yarn install
RUN ls

CMD ["yarn","start"]