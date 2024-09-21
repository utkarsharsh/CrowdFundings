const mongoose = require("mongoose")

const chariyMessageSchema = new mongoose.Schema({
    address:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        trim:true,
    }
})
module.exports = mongoose.model("CharityMsg",chariyMessageSchema)