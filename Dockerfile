FROM node:10

WORKDIR /usr/src/app

# Installing dependencies
# COPY package.json and yarn.lock to current workdir in container
COPY package.json yarn.lock  ./
RUN yarn install

# Copying source files
# yarn install will not run if we have change in pages
COPY . .

# Building app
RUN yarn run build

# Running the app
CMD ["yarn", "dev"]