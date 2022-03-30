const express = require("express");
const cors = require("cors");
const app = express();
const livereload = require("livereload");
const server = require("http").Server(app);
const liveReload = require("express-live-reloading")(server);
const livereloadMiddleware = require("connect-livereload");
var path = require("path");
const http = require("http");

app.use(express.json());
app.use(livereloadMiddleware());
app.use(liveReload);
app.use(express.static("../client"));

liveReload.toolbar(true);

app.use(
  cors({
    origin: "http://127.0.0.1:5501/",
    credentials: true,
  })
);

app.get("/", (req, res, next) => {
  let requestOptions = {
    hostname: "127.0.0.1",
    port: 5501,
    path: "/",
    method: "GET",
  };

  let externalRequest = http.request(requestOptions, (externalResponse) => {
    externalResponse.on("end", () => {
      // Response to client
      res.end("data was send to serverB");
    });
  });

  externalRequest.end();
  res.send(externalRequest);
});

app.post("/", (req, res) => {
  res.liveReload(__dirname + "/../client/index.html");
  res.sendFile(path.resolve("../client/index.html"));
});

app.listen(4000, () => console.log("4000번 포트에서 대기중"));
