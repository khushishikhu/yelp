require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require('./db')

//middleware
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req,res) =>{
    try {
        const results = await db.query(" select * from restaurants"); //returns a promise
        console.log(results)
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
            restaurants: results.rows,
        },
    });

    } catch(err) {
        console.log(err)
    }
});

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req,res)=>{
    console.log(req.params.id);
    try{
        const results = await db.query(`select * from restaurants where id = ${req.params.id}`);
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            data: {
            restaurants: results.rows[0],
            },
        });
    } catch(err){
        console.log(err)
    }
});

//create a restaurant
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req);  
})

//update restaurants
app.put("/api/v1/restaurants/:id", (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        date: {
            restaurant: "mcdonalds",
        },
    });
});

//delete restaurants
app.delete("/api/v1/restaurants/:id", (req,res)=>{
    res.status(204).json({
        status: "success",
    })
})

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server is listening ${port}`)
});