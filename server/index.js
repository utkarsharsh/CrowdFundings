const express = require("express");
const app = express();
const cors = require("cors")
const router = require("./Routes/charityRoute")

require("dotenv").config();
const DbConnect = require("./config/DbConnect")

app.use(express.json())
app.use(cors({
    origin:"http://localhost:4000/",
    credentials:true,
}))

app.use("/",router)

app.get("/",(req,res)=>{
    res.send("Hello")
})

const PORT = process.env.PORT
DbConnect()
app.listen(PORT,()=>{
    console.log("APP IS LISTENING")
})