const router=require('express').Router()
const path=require('path')
const { ROOTDIR } = require('../utils/path')

router.get('/',(req,res,next)=>{
    res.render('index',{doc_title:"Index",
        programs:["php","js","java"]
    })
})
router.get('/about',(req,res,next)=>{
    res.sendFile(path.join(ROOTDIR,'views','about.html'))
})

module.exports=router
