const express = require("express");
const {handleGetQuotes} = require("../controllers/quoteController")

const quoteRouter = express.Router();


quoteRouter.get("/get-quotes", handleGetQuotes);


module.exports = quoteRouter;