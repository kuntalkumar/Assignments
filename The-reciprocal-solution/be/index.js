const express=require("express");
const mongoose= require("mongoose")
const app=express();
const port = 8080;

app.use(express.json())


const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const UserModel=mongoose.model("user",userSchema)

app.get("/", (req,res)=>{
  
    res.send("Api is Working ")
})


app.post("/register",async (req,res)=>{

    const {name,email,password}=req.body;

    const data= await UserModel.create({
        name,
        email,
        password
    })
    res.send(data);


    })
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;

    try {
        const isuser= await UserModel.findOne({email})
        if(isuser)
            {

                    if (isuser.password===password) {

                        res.send ("Successfully logged in (:")
                        
                    } else {
                        res.send ("Wrong password ):")

                    }

            }else{
                res.send ("User not register kindly register first!")
            }
    } catch (error) {

        res.send("Internal server error ")
        
    }
})









app.listen(port,async()=>{
    try {
        const connection = await mongoose.connect("mongodb+srv://kuntalkumar789:kuntal98@cluster0.vigwezr.mongodb.net/practice")
        console.log("Connected to Data base ")

    } catch (error) {
        console.log("Failled to connect to Data base ")

        
    }
    console.log("App is listening on port no ", port)

})