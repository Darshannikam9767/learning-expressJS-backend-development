const express = require("express")
const app = express()

const port = 3000

app.set("view engine", "ejs")

app.use((req,res,next)=>{
    console.log("From MiddleWare.....");
    next()
})

app.get("/",(req,res)=>{
    console.log("Entered in Base route....");
    
    return res.json({Health:"Status Healthy..."})
})

app.get("/profile/:username",(req,res)=>{
    return res.json({message:`Hello ${req.params.username}`})
})

app.get("/calculate",(req, res)=>{
    res.render("index")
})

app.listen(port)