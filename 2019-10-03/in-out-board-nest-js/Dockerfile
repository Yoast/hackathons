# Use an official Python runtime as a parent image
FROM node:11

# Set the working directory to /app
WORKDIR ./

ENV PATH /node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

CMD [ "yarn", "start" ]
