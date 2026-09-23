import express from 'express'

const app=express()
// request goes here 
app.get("/"(ren,res)=>{
    res.end.send("<h1>hello Express </h1>")
})
app.listen(3333,()=>console.log("prg1 is running at 3333"));