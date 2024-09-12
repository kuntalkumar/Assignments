const express=require("express")
const mongoose=require("mongoose");
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt")
const app=express();
app.use(express.json())


const connection=mongoose.connect("mongodb+srv://kuntalkumar789:kuntal98@cluster0.vigwezr.mongodb.net/day1practice")
.then((result) => {
    console.log("connected to data base successfully (:")

}).catch((err) => {
    console.log("error to connect db",err)
});

const userSchema=mongoose.Schema({
    name:{
        type :String ,
        require:true
    },
    email:{
        type:String ,
        require:true,
        unique:true,

    },
    password:{
        type:String,
        require:true 
    }
})


const UserModel=mongoose.model("user",userSchema)



app.get("/",(req,res)=>{
    res.send("Api is working (:")
})


app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const HashPassword= await bcrypt.hash(password,10)
        const newUser= await new UserModel({name,email,password:HashPassword})
        newUser.save();
        res.status(201).json({newUser})


    } catch (error) {
        res.status(500).json({err})
    }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body

    const findUser= await UserModel.findOne({email})
    if(findUser){

        const isAuth=await bcrypt.compare(password,findUser.password)
        if(isAuth){
            res.status(201).json({message:"Loggedin Successfully " })

        }
    }

})

app.get("/allusers", async(req,res)=>{

    const allusers=await UserModel.find();
    res.send(allusers)
})


const port= 8080;
app.listen(port, (req,res)=>{
    console.log(" App is runnng on port no ", port )
})