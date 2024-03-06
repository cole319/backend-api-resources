import express from "express";
import cors from "cors";
import axios from "axios";

const contents = [
  {
    id: 1,
    title: "First content",
    desc: "this is the first content",
  },
  {
    id: 2,
    title: "Second content",
    desc: "this is the second content",
  },
  {
    id: 3,
    title: "Third content",
    desc: "this is the third content",
  },
  {
    id: 4,
    title: "Fourth content",
    desc: "this is the fourth content",
  },
  {
    id: 5,
    title: "Fifth content",
    desc: "this is the fifth content",
  },
];

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get("/api/v1/contents", (req, res) => {
  res.send(contents);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from the server</h1>");
});

app.listen(PORT, () => {
  console.log(`server running in ${process.env.DEV_MODE} on port: ${PORT}`);
});
