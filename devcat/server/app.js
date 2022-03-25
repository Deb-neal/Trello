const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(201).send("Hello World");
});

app.post("/makeList", (req, res) => {
  console.log(req.body);
  res.status(201).send("Hello World");
});

app.listen(4000, () => console.log("4000번 포트에서 대기중"));
