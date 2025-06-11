const express=require('express')

const app=express()
app.use((req,res,next)=>{
    console.log("1.Express js working..... This Not Routing ")
})
app.use((req,res,next)=>{
    console.log("2.Express js working..... This Not Routing ")
})
app.use(()=>{
    console.log("3.Express js working..... This Not Routing ")
})

app.listen(3000)