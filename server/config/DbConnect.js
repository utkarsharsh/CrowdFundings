const mongoose = require("mongoose")
require("dotenv").config()

const DbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB Connect SuccessFully")
    })
    .catch((err)=>{
        console.log("Error in DB Connect",err);
    })
}
module.exports = DbConnect