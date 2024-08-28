const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express();

app.use(express.json())
dotenv.config(); 
const mongoDbUrl=process.env.MONGODB_URL

const userSchema=new mongoose.Schema({
    task:{type:String, require:true},
    status:{type:String,require:true}
})

const TodoModel= mongoose.model("todo",userSchema)


app.get("/",async (req,res)=>{

    const allTasks= await TodoModel.find();
if(!allTasks){
    res.send("No Tasks .....")

}
    res.status(201).json(allTasks)

})

app.post("/addtask", async (req,res)=>{
    const {task,status}=req.body

    const newTask=  new TodoModel({task,status})
    res.send(newTask)
    await newTask.save()

})
app.put("/edit/:id", async(req,res)=>{
    const {id}=req.params
    const {task,status}=req.body
    const edited= await TodoModel.findById(id)
    edited.status=status
   await edited.save()
   res.send(edited)

})
app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const Deletedtask=await TodoModel.findByIdAndDelete(id);
    res.send(Deletedtask);
})

const port=8080;
app.listen(port, async(req,res)=>{
    console.log(`Port is listening on Port No: ${port}`)
    await mongoose.connect(mongoDbUrl).then((red)=>{
        console.log("Connected to db successfully")
    }).catch((err)=>{
        console.log("Error to connect to DB", err)
    })

})