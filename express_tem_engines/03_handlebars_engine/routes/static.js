const router=require('express').Router()
const path=require('path')
const { ROOTDIR } = require('../utils/path')

router.get('/',(req,res,next)=>{
    res.status(200).render('index',{
        doc_title:'Home',
        // courses:[
        //     // 'Php',
        //     // "Python",
        //     // "Java",
        //     // "C",
        //     // "Js"
        // ]
    })
})
router.get('/about',(req,res,next)=>{
    res.status(200).render('about')
})

module.exports=router
