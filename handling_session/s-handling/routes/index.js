var express = require('express');
const { Session } = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("age",21)
  req.session.isBanned = false
  res.render('index', { title: 'Express' });
});

router.get("/check-session",(req, res)=>{
  
  if(req.session.isBanned){
    return res.json({
      "Banned Status":"You are banned on this platform...."
  })
  }

  return res.json({
      "Banned Status":"You are not banned on this platform...."
    })
})

router.get("/invert-session",(req, res)=>{
  
  if(req.session.isBanned){
      req.session.isBanned = false
    return res.json({
      "Banned Status":"You are not banned on this platform...."
  })
  }
  req.session.isBanned = true
  return res.json({
      "Banned Status":"You are banned on this platform...."
    })
})

router.get("/unban-status",(req,res)=>{
  req.session.destroy((err)=>{
   if(err){
     return res.json({
      status:"error",
      "error":err
      
    })
   }
   return res.json({
    status:"success",
    msg:"session destroyed..."
   })
  })
})

module.exports = router;
