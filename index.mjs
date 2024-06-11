import express from "express";
import booksRouter from "./routes/booksRoutes.mjs";
import db from "./db/db.mjs";
import cors from "cors";
import articleRuoter from "./routes/articleRouter.mjs";
const app = express();
db.on("error", () => {
  console.log("error");
});
db.on("connected", () => {
  console.log("connect");
});
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/books", booksRouter);
app.use("/arcticle", articleRuoter);

app.listen(4000, () => {
  console.log("server is running");
});
