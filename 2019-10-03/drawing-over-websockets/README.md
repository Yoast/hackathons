# Drawing over Websockets

Just drawing some happy little clouds!

This app lets you draw in your browser, and what you draw is shown in real time in other browsers!

**Getting started**
* Clone this repository and navigate to the corresponding directory.
* Install and launch [docker](https://docs.docker.com/docker-for-mac/install/).
* Run `docker-compose up`.
* Run `yarn`.
* Run `yarn start`.
* Run `node app.js`.

**Drawing**
* In the browser, navigate to `localhost:8081` in two different tabs.
* Draw in one tab, and see the drawing appear in the other.

**How does it work?**
* `docker-compose up` creates a server that uses port 8081. This server is used to 
* `yarn` installs the necessary dependencies.
* `yarn start` uses the `nodemon library` to run `index.js`, which listens to port 8081.
* `node app.js` starts the server on port 8082 that listens for new drawings coming in, and sends them to other participants (here: other tabs in the browser). This server uses a websocket to receive and send the drawings in real time.

**Ideas for improvement**
* Make the app run on different computers.
* Show the number of participants in the browser.
