console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");


let num =[1,3,4,4,5]

let sum=num.reduce((ac, crr)=>{
return ac+crr;
},0)

console.log(...new Set(num))