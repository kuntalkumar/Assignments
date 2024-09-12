const express= require("express");
const mongoose=require("mongoose");

const app=express()

const connection=mongoose.connect("mongodb+srv://kuntalkumar789:kuntal98@cluster0.vigwezr.mongodb.net/ptweb15")
.then(()=>{

console.log("Connected to db")
}).catch((err)=>{
    console.log(err)
})


const mongoSchema= mongoose.Schema({
    name:String,
    email:String ,
    purchase_year:String
})

const ModelMogo= mongoose.model("car", mongoSchema)




const fun =async function (){
    let rseponse= await ModelMogo.find({purchase_year:{$lt: 2002}})

    console.log(rseponse)

}

fun()



app.get("/", async(req,res)=>{
// res.send("Api is working ")

// let rseponse= await ModelMogo.find( purchase_year>2002)


})

const port =8080;

app.listen(port,(req,res)=>{
    console.log("App is listening on port ",port)
})