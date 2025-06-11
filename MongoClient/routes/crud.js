const routes=require('express').Router()
const DBO=require('../db')
const bp=require('body-parser')
const mongodb=require('mongodb')
const { ObjectId } = require('mongodb');

routes.get('/',async(req,res,next)=>{
   let database=DBO.getDatabase() 
   let collect= (await database).collection('books')
   let cursor=collect.find({})
   let emps= await cursor.toArray()
   let status=req.query.status
   let message=''
   let edit_id,book;
   if(req.query.edit_id){
    edit_id=new ObjectId( req.query.edit_id)
    book=await collect.findOne({_id:edit_id})
    console.log(book)
   }
   
   switch(status){
    case '1':
        message="Insert Successfully"
        break
    case "2":
        message="Updated Sucessfully"  
        break  
    case "3":
        message="Deleted Sucessfully"  
        break  
    default:
        message =''    
   }
   res.status(200).render('index',{
    doctitle:'Home',
    emps,
    message,
    edit_id,book
   })
})
routes.post('/store-book',async(req,res,next)=>{
  let database= await DBO.getDatabase()
  let connection= database.collection('books')
  let book=req.body
  await connection.insertOne(book)
  return res.redirect('/?status=1')
})
routes.post('/update_book/:edit_id',async(req,res,next)=>{
  const edit_id=new ObjectId(req.params.edit_id)
   let database= await DBO.getDatabase()
  let connection= database.collection('books')
   let book=req.body
  await connection.updateOne({_id:(edit_id)},{$set:book})
  return res.redirect('/?status=2')
})
routes.get('/delete_book/:delete_id',async(req,res,next)=>{
  const delete_id=new ObjectId(req.params.delete_id)
   let database= await DBO.getDatabase()
  let connection= database.collection('books')
  await connection.deleteOne({_id:(delete_id)})
  return res.redirect('/?status=3')
})
module.exports=routes