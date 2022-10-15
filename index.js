const express =require('express');
const mongoose_connect = require('mongoose');
const bodyParser = require('body-parser'); //get body parser
require('dotenv/config'); //dont allot to const
const app = express();

//import posts routes
const postsRoute = require('./routes/posts'); 

app.use(bodyParser.json()); //use it before handling any request
//middleware to point to routes/posts.js
app.use('/posts',postsRoute);

//Routes
app.get('/',(req,res)=>{
    res.send("This is home response")
})

//connect to db
mongoose_connect.connect(process.env.DB_CONNECTION,()=>{
    console.log("Connected to mongo")
})

app.listen(3000);