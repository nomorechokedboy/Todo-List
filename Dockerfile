FROM node:14-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn

COPY . /usr/src/app

# ENV NODE_ENV=production
# ENV PORT=5000

<<<<<<< HEAD
CMD ["yarn", "dev"]
# docker build -t stikinote-frontend:dev .
=======
CMD ["npm", "run", "dev"]

# docker build -t stikinote-frontend:dev .
>>>>>>> fcc27ccd788efa905895505a359da5f0f475e810
