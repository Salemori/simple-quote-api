const { quotesDb } = require("../config/inMemory");

exports.handleGetQuotes = (req, res) => {
  try {
    return res.status(200).json({
      message: "Quote retrieved successfully",
      data: quotesDb,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to retrieve quotes",
      error: error.message,
    });
  }
};

exports.handleCreateQuote = (req, res) => {
  try {
    const { quote , author} = req.body;

    if (!quote || !author) {
      return res.status(400).json({
        message: "Quote field is required",
      });
    }

    quotesDb.push({id: quotesDb.length + 1, quote: quote, author: author});
    console.log(quotesDb[quotesDb.length - 1]);
    return res.status(201).json({
      message: "Quote created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create quote",
      error: error.message,
    });
  }
};
