const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('./models/dbconnect');

dotenv.config();


const app = express();
const Port = 5000;

app.use(cors());
app.use(express.json());
 

// temp check

app.get ('/',(req,res)=>{
    res.send("hello");
})


app.listen(Port ,()=>{
    console.log(`application is started...${Port}`);
    })