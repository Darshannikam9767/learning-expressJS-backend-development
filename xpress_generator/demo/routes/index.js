var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create", async(req, res)=>{
  const createdUser = await userModel.create({
    
    username:"dummy",
    name:"Darshan",
    age:21

   })

   return res.json({createdUser:`${createdUser}`})
})

router.get("/find/allusers",async(req,res)=>{
  let allUsers = await userModel.find()
  return res.json({allUsers : allUsers})
})

router.get("/find/oneuser",async(req,res)=>{
  let user = await userModel.findOne({name:"Darshan"})
  return res.json({user:user})
})

router.get("/delete/oneuser",async (req,res) => {
  let deletedUser = await userModel.findOneAndDelete({
    name:"Darshan"
  })  

  return res.json({deletedUser:deletedUser})
})

module.exports = router;
