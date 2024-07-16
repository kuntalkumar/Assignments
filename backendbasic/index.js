const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const bcrypt=require("bcrypt")
const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json()); 


const userSchema=mongoose.Schema({
    name:String,
    email:String,

    password:String
})

const UserModel=mongoose.model("user", userSchema)
const port =  8080;


app.get("/", (req, res) => {
    res.send("API is working fine (: ");
});

app.get("/user",async(req,res)=>{
try {
    const data= await UserModel.find()
    res.send(data)
} catch (error) {
    console.log(error)
}
})

app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    const data = await UserModel.create({
        name,
        email,
        password,
        
        
    });
    res.send(data);

})

app.post("/login",async(req,res)=>{

    const { email, password } = req.body;
try {
    const isuser= await UserModel.findOne({email})
    // console.log(isuser.password)

    if(isuser){
        // const result = await bcrypt.compare(password, isuser.password);
        // if(result){

        if(password===isuser.password){
            res.send("Loging successfully")
        }else{
            res.send("wrong password")

        }
    }
    else{
        res.send("Register first !!")
    }
   
} catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Internal Server Error" });

}

})




app.listen(port, async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://kuntalkumar789:kuntal98@cluster0.vigwezr.mongodb.net/practice");
        console.log("App is listening on port ", port);
        console.log("Connected to DB successfully")

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    }
});
