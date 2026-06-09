const express = require("express")
const app = express()
const port = 3000

app.set("view engine","ejs")
app.use(express.static("./public"))

// app.get("/",(req,res)=>{
//     return res.json({status:"Healthy...."})
// })

app.get("/server-log",(req,res)=>{
    return res.json({Server_Log:`Running on port =  ${port}`})
})

app.get("/",(req,res)=>{
    res.render("./index")
})

app.listen(port)