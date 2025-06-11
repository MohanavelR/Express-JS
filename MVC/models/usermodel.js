exports.getUser =(email)=>{
   const users=[
    {
        email:"rmohanavel2003@gmail.com",
        password:"123456"
    }
   ]
  const value = users.filter((user)=>{
     if( user.email === email)
      return user
   })
   if(value.length > 0){
    return value[0] 
   }

   return null
}