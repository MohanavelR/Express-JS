const express=require('express')
const path=require('path')
// const rootDir = require('../utlis/path')
const ROOTDIR = require('../utlis/path')
const router=express.Router()

router.get("/add_product",(req,res,next)=>{
    res.sendFile(path.join(ROOTDIR,"views","add_product.html"))
})
router.post('/products',(req,res,next)=>{
   res.sendFile(path.join(ROOTDIR,'views','shop.html'))
})

module.exports=router