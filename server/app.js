import express from "express"
const app = express()
import config from "config"
import "./dbConnect.js"
const port = config.get("PORT")

app.get("/",(req,res)=>{res.send("server Up and Running")})

app.listen(port,()=>console.log(`server running on ${port}`))
