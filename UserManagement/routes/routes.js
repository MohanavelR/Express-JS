const {read, create, update, save, set, remove} =require('../controller/operation')
const routers=require('express').Router()
routers.get('/',read)
routers.get('/create',create)
routers.get('/update',update)
routers.post('/save',save)
routers.post('/set/:id',set)
routers.get('/delete',remove)
module.exports=routers