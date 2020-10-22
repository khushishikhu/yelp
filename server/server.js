require("dotenv").config();
const express = require("express")
const app = express()

app.get("/getrestaurant", (req,res) =>{
    res.json({
        status: "success",
        restaurant: "mcdonalds",
    });
});

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server is listening ${port}`)
});