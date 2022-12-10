FROM node:16.17.1-slim

WORKDIR /usr/src/app

# # copying all the files from your file system to container file system
COPY package.json .
COPY package-lock.json .

RUN npm install -g npm@9.1.2

# install all dependencies
RUN npm install

# copy other files as well
COPY . .

#expose the port
EXPOSE 8080

# command to run when intantiate an image
CMD ["node", "src/index.js"]