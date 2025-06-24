const {quotesDb} = require("../config/inMemory");


exports.handleGetQuotes = (req, res) =>{
    try {

        let quotes = quotesDb.map((quote)=>(quote))

        return res.status(200).json({
            message: "Successfully retrieved quotes",
            data: quotes
        })
    } catch (error) {
           return res.status(400).json({
            message: "Failed to retrieve quotes",
            error: error.message
        })
    }
}

