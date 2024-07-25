const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())

const connection =mongoose.connect("mongodb+srv://kuntalkumar789:kuntal98@cluster0.vigwezr.mongodb.net/practice").then(()=>{
    console.log("connected successfully")
}).catch(()=>{
    console.log("error to connect db")
})

const TodoSchema={
    title:String,
    des:String
}
const TodoModel=mongoose.model("todo",TodoSchema)



app.get("/", (req,res)=>{
    res.send("Api is working fine ")
})

app.post("/addtodo", async(req,res)=>{

    const {title,des}=req.body;
    const todo=new TodoModel({title,des})
await todo.save();
res.status(201).json({message:"Todo added successfully ", todo})
})
const port =8080;

app.listen(port,()=>{
    console.log("App is running on port no ",port)
})
