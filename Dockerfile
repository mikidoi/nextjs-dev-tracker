FROM node:10

WORKDIR /usr/src/app

# Installing dependencies
COPY package.json yarn.lock ./

# Copying source files
COPY . .

# Building app
RUN yarn run build

# Running the app
CMD ["yarn", "dev"]