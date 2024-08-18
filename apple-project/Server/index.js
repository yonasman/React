const express = require("express");
const mysql2 = require("mysql2");
const PORT = 1122;
// initialize express
const app = express()
// allow cross resource sharing
const cors = require("cors")
app.use(cors())

// configure don env
require('dotenv').config(); 

const connection = mysql2.createConnection({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

connection.connect((err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("connected to database")
})

app.get("/iphones", (req,res) => {
    const queryString = "SELECT * FROM products JOIN productprice ON products.product_id = productprice.product_id JOIN productdescription ON products.product_id = productdescription.product_id";

    connection.query(queryString, (err,results,fields) => {
        if(err) {
            console.log(err)
            res.sendStatus(500)
            return
        }
        console.log("successfully fetched")
        res.send(results);
    })
})


// listen for port 1122
app.listen(PORT, () => {
    console.log("Listening to " + PORT)
})