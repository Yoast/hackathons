### How to start 

To start the Node.js part`yarn start` in the root.
To start the React part: `yarn start` in `client`.

navigate to http://localhost:3000
To view all routes: http://localhost:3000/swagger

### Docker
**The current implementation does not work with Docker**

To build: `docker build -t in-out-board:dev .`

To start: `docker run -v ${PWD}:/in-out-board-nest-js -v in-out-board-nest-js/node_modules -p 3001:3000 --rm in-out-board:dev`

navigate to http://localhost:3001

To find container ID: `docker ps` 

To stop: `docker stop <CONTAINER ID>`
