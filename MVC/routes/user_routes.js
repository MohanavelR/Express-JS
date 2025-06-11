const routes = require('express').Router()
const {loginPage,dashborad, loginprocess} = require('../controller/userController')
routes.get('/',loginPage)
routes.get('/dashboard',dashborad)
routes.post('/login',loginprocess)
module.exports=routes