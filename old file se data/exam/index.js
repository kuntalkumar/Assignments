  import axios from "axios"
  

 const fun= async()=>{

    let res = await axios(api).then((result) => {
        console.log(result)
    }).catch((err) => {
        
    });
 }

 fun()