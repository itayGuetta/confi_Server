const mongoose = require('mongoose');
var config = require('../config/keys');
const uri = config.MonogoDB_Uri

const connectDB = async()=>{
  await  mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true }).then(
    ()=>console.log("MongoDB connected ! ")).catch((err) => console.log(err))
}

module.exports = connectDB;
