# Use an official Python runtime as a parent image
FROM node:11

# Set the working directory to /app
WORKDIR ./in-out-board-nest-js/

ENV PATH /in-out-board-nest-js/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

CMD [ "yarn", "start" ]
