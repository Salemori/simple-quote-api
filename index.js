const express = require("express");
require("dotenv").config();


const app = express();

app.use(express.json());

const port = "8080";

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`));


app.get("/", (req, res)=>{
    return res.send("Simple Quote API is active and running!...");
});