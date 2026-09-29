import express from "express"

const app = express()

// request goes here
app.get("/",(req,res)=>{
    res.send("<h1>Hello express</h1>");
});
app.get("/about ",(req,res)=>{
    res.send("<h1>About us  page </h1>");
});
const products = [
  { id: 1, name: "marker", qty: 100, price: 15 },
  { id: 2, name: "duster", qty: 50, price: 10 },
];
app.get( (req,res)=>{
    res.status (404).send("<h1>   page not found </h1>");
});
app.use ((req,res) =>{
    res.status (404).send("<h1>Page not found </h1>  ")
});
 
//always listen at last
app.listen(3333,()=> console.log("prg1 is running on port 3333"));
