const { getUser } = require("../models/usermodel")

exports.loginPage = (req,res,next)=>{
    res.render('login')
}
exports.dashborad=(req,res,next)=>{
    res.render('dashboard')
}
exports.loginprocess =(req,res,next)=>{
  const user =  getUser(req.body.email)
  console.log(req.body)
  console.log(user)
  if(user !=null && user.password == req.body.password){
      res.send('Successfully Login')
  }
  else if(user===null){
    res.send("No Registerd")
  }
  else{
    res.send('Invailed Data..')
  }
}
