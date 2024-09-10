const express =require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
dotenv.config()
const app=express();
app.use(express.json())
const mongoDbUrl=process.env.MONGODB_URL



// code for user management 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        require:true,
        length:10,
        
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8  
    }
});

const UserModel=mongoose.model("user",userSchema)

app.post("/sighnup",async(req,res)=>{

const {name,phone,email,password}=req.body

const isUser= await UserModel.findOne({email})

if(isUser){
    res.status(400).json({message : "Already Registered"})
}
const hashPassword= await bcrypt.hash(password,10)
const newUser={
    name:name,
    phone:phone,
    email:email,
    password:hashPassword
}
const newUserdata= await UserModel.create(newUser)
res.status(200).json({message:newUserdata})
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const isUser= await UserModel.findOne({email})
    if(!isUser){
        res.status(400).json({message : "Not found any user kindly Sighnup "})

    }
    const checkPassword= await bcrypt.compare(password,isUser.password)

    if(!checkPassword){
        res.status(404).json({message : "wrong password "})
    }
    const token = jwt.sign({ id: isUser._id, email: isUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Logged in successfully", token });


})

//  below portion of code for task management

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'progress', 'completed'],
        default: 'pending'
    },
    priority : {
                type:String
    }
}); 

const TaskModel = mongoose.model("task", taskSchema);

app.post("/addtask",async(req,res)=>{

    const{task}=req.body
    const newTask= await TaskModel.create({task})

    res.status(201).json({message: newTask})


})

app.get("/task",async(req,res)=>{
    const alltasks= await TaskModel.find()

    res.status(201).json({message:alltasks})
})

app.put("/edit/:id", async(req,res)=>{

    try {
        const { status } = req.body;
        const taskId = req.params.id;
        const updatedTask = await TaskModel.findByIdAndUpdate(
            taskId,
            { status },
            { new: true, runValidators: true } 
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task edited successfully", updatedTask });
}

catch(err){
            res.status(500).json({message : "server error while editing the tasks "})
}
})

app.delete("/delete/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await TaskModel.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", deletedTask });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


const port=8080
app.listen(port,(req,res)=>{

    console.log("App listening on port no ", port)
    mongoose.connect(mongoDbUrl).then((ele)=>{
        console.log("Connected to db successfullly")
    }).catch(()=>{
        console.log("Failled to connect to db")
    })

})