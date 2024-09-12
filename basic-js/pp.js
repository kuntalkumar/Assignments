function mypromise(){

    return new Promise((resolve,reject)=>{
            const task=true;

            setTimeout(()=>{

                if(task){
                    resolve("Ho gaya kam ")
                }else {
                    reject("nahi bani baat")
                }
            },1000)
    })
}


mypromise().then((res)=>{
    console.log(res)
}).catch((err)=>{
console.log(err)
})


function outer (){
    const hi="Hi from kkk"
   return function inner(){

        return hi;
    }
}

const outerFunc=outer()
console.log(outerFunc())