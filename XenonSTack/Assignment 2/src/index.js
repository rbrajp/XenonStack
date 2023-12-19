const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const { Collection } = require("mongoose")

const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false})) 

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{ 
    res.render("signup")
})


app.post("/signup",async (req,res)=>{

const data={
    name:req.body.name,
    password:req.body.password
}
console.log([data]);

 await collection.insertMany([data])
   res.render("home")


})
app.get("/contactus",(req,res)=>{ 
    res.render("home")
})


app.listen(3000,()=>{
    console.log("port connected");
})





