
// duration 30 min (selected for 2nd round)

// theory => 1 var let const 
//           2 promises 
//           3 closures
//           4 hoisting 
//           5 call apply bind 
//           6 this 
//           7 debouncing 
//           8 ajax 
            
            

// practicle

// 1. 
// const object1 = {
//         a: 10,
//         b: 20,
//         c: function () {
//                 // console.log(this.a + this.b);
    
    
//         },
//       };
//       const func = object1.c;
//       func()

// 2.
// let num = 5;
// console.log(num++) 
// console.log(++num)

// 3. 

// const arr= [1,2,3,4,5,6,7,8,9]

// let k=3;  rotate the array in k number of times 



// const object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//       return  ()=>{
//             // console.log(this.a + this.b);


//         }
//     },
//   };
//   const func = object1.c;
//   func()

// // object1.c()
// let num = 5;
// console.log(num++) 
// console.log(++num)


const arr= [1,2,3,4,5,6,7,8,9]

let k=13;
k=k%arr.length-1

const res=[]

for(let i=k;i<arr.length;i++){

res.push(arr[i])

}
for(let i=0;i<k;i++){

    res.push(arr[i])
    
    }
console.log(res)

//123
//231
//312
//123