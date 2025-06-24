const express = require("express");
const quoteRouter = require("./routers/quoteRouter");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/v1", quoteRouter);

const port = process.env.PORT_ONE || process.env.PORT_TWO;

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);

app.get("/", (req, res) => {
  return res.send("Simple Quote API is active and running!...");
});
