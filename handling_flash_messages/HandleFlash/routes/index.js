var express = require('express');
var router = express.Router();

const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create",async (req,res)=>{
  let userData = await userModel.create({
    username:"Rushikesh",
    nickname:"rushihackerrrr",
    description:"hiii i am Rushikesh, and my all friends called me ushi Hackerrrr.!!",
    category:["joke","lie","fun"],
    })

    return res.json({
      "mogoose Data":userData
    })
})

router.get("/find", async (req, res)=>{
  var regex = new RegExp("^darshan$","i")
  let user = await userModel.find({
    username:regex
  })
  return res.json({
    "user Data":user
  })
})

router.get("/findbycategory",async (req,res) => {
    let specificUser = await userModel.find({category:{$all:["react"]}})
    return res.json({
      "By category":specificUser
    })
})

router.get("/findbydate",async (req,res) => {
  var date1 = new Date("2026-06-14")
  var date2 = new Date("2026-06-15")  

  let user = await userModel.find({datecreatede:{$gt:date1}})

  return res.json({
    "by date":user
  })
})

router.get("/existingfeild",async (req, res) => {
  let user = await userModel.find({category:{$exists:true}})
  return res.json({
    "based on category exist":user
  })
})

router.get("/findbyfeildlength",async (req, res) => {
  let user = await userModel.find({
    $expr:{
      $and:[
        {$gte:[{$strLenCP:"$nickname"},2]},
        {$lte:[{$strLenCP:"$nickname"},30]}
      ]
    }
  })

  return res.json({
    "by length":user
  })
})




module.exports = router;
