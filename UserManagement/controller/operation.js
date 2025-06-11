const { db } = require("../db")
const read=(req,res,next)=>{
    let users;
db.getConnection((err,connection)=>{
    let message=''
    message=req.flash('message')
    if(!err)
     connection.query('select * from users',(errs,row)=>{
        connection.release()      
      if(!err){
            res.status(200).render('index',{
            doctitle:"Home",
              users:row,
              message
             })
          }
          else{
            res.send(errs)
          }
      }) 
    else{
           res.send(err)
    }
    })
    
}
const create=(req,res)=>{
    res.status(200).render('add_user',{
        doctitle:"Add User"
    })
}
const update=(req,res)=>{
    const id = req.query.id
    db.getConnection((err,connection)=>{
        if (!err){
              connection.query(`select * from users where id =${id}`,(errs,row)=>{
                connection.release()  
                if(!errs){
                    res.status(200).render('update',{data:row[0],doctitle:"Update"})
                   }
              })
        }
        else{
            res.send(err)
        }
     
    })
}
const save=(req,res)=>{

    db.getConnection((err,connection)=>{
        let {name,age,city}=req.body
    if(!err)
     connection.query('insert into users(name,age,city) values(?,?,?)',[name,age,city],(errs,row)=>{
        connection.release()   
      if(!err){
        req.flash('message', 'Added successfully!');
            res.status(200).redirect('/')
          }
          else{
            res.send(errs)
          }
      }) 
    else{
           res.send(err)
    }
    })
}
const set=(req,res)=>{ 
    db.getConnection((err,connection)=>{
        let {name,age,city}=req.body
        let id =req.params.id
    if(!err)
     connection.query('update users set name=?,age=?,city=? where id =?',[name,age,city,id],(errs,row)=>{
        connection.release()     
      if(!err){
           req.flash('message', 'Updated successfully!');
            res.status(200).redirect('/')
          }
          else{
            res.send(errs)
          }
      }) 
    else{
           res.send(err)
    }
    })

}
const remove=(req,res)=>{
      db.getConnection((err,connection)=>{
        let id =req.query.id
    if(!err)
     connection.query(`delete from users where id=${id}`,(errs,row)=>{
        connection.release()     
      if(!err){
        req.flash('message', 'Deleted successfully!');
            res.status(200).redirect('/')
          }
          else{
            res.send(errs)
          }
      }) 
    else{
           res.send(err)
    }
    })

}
module.exports={
    read,create,update,save,set,remove
}