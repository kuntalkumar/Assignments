function dd(){
    return new Promise((resolve,reject)=>{
        const kk=true 
        setTimeout(() => {
            if(kk){
                resolve("kam ban gayi be !")
            }else{
                reject("Humse na ho payega !")
            }
            
        }, 1000);
      


    })
}

dd().then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})