const express =require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
dotenv.config()
const app=express();
app.use(express.json())
const mongoDbUrl=process.env.MONGODB_URL

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



const port=8080
app.listen(port,(req,res)=>{

    console.log("App listening on port no ", port)
    mongoose.connect(mongoDbUrl).then((ele)=>{
        console.log("Connected to db successfullly")
    }).catch(()=>{
        console.log("Failled to connect to db")
    })

})