FROM node:14-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn

COPY . /usr/src/app

# ENV NODE_ENV=production
# ENV PORT=5000

CMD ["yarn", "dev"]
# docker build -t stikinote-frontend:dev .