const express=require('express')
require('dotenv').config();
require('./src/db/mongodb')
const app=express();
const port = process.env.PORT | 3000;
const {route} =require('./src/routers/user')
app.use(express.json())
app.use(route)
app.listen(port, () => {
    console.log('App listening on port 3000!');
});