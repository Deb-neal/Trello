const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(201).send("Hello World");
});

app.get("/hello", function (req, res) {
  res.send("hello world");
});

app.use(express.static("index.html"));

app.listen(4000, () => console.log("4000번 포트에서 대기중"));
