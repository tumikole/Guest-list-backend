const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require("mongoose")
const {allRoutes} = require('./Routes/index')



mongoose.connect(
    process.env.DATABASE_SERVER,
  ).then(res => console.log('("i am connected to mangoDB")')).catch(err => console.log(err))

app.use(express.json())
allRoutes(app)


 app.listen(process.env.PORT,() =>  {
  console.log('Your app is listening on port ' + process.env.PORT)
 })