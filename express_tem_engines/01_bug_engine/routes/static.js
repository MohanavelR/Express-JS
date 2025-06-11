const router=require('express').Router()
const path=require('path')
const { ROOTDIR } = require('../utils/path')

router.get('/',(req,res,next)=>{
    // res.sendFile(path.join(ROOTDIR,'views','index.html'))
    res.status(200).render('index',{
        doc_title:"Home",
        programmings:['Php',"js","python","java"]
    })
})
router.get('/about',(req,res,next)=>{
    res.status(200).render('about')
})

module.exports=router
