const express = require("express");
const {
  handleGetQuotes,
  handleCreateQuote,
} = require("../controllers/quoteController");

const quoteRouter = express.Router();

quoteRouter.get("/quotes", handleGetQuotes);
quoteRouter.post("/quotes", handleCreateQuote);

module.exports = quoteRouter;
