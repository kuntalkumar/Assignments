// 1. Find all the unique products in 
//                                    [‘apple’, orange’, ’mango’,’ orange’, ’mango’, ‘apple’, ’orange’]  [[‘apple’, orange’, ’mango’],[’ orange’, ’mango’, ‘apple’], [’orange’]] 
                                                                  

// let arr=  ["apple", "orange", "mango", "orange", "mango", "apple", "orange"]
//     let brr=  [["apple", "orange", "mango"],[ "orange", "mango", "apple"], ["orange"]] 

//     let conctArr=(brr[0].concat(brr[1]).concat(brr[2]).concat(arr));

// let result=[];

//     for(let i=0;i<conctArr.length-1;i++){

//         if(!result.includes(conctArr[i])){
           
//             result.push(conctArr[i])

//         }
//     }



//  console.log(result)

////  2. Find the largest number in [ 12,3,55,235,47,32,65,71,2,26,18,null,22,3 ] , [ [12,3],[55,235,47],[32,65,71],[2,26,18],[null,22,3] ]


// const arr=[ 12,3,55,235,47,32,65,71,2,26,18,null,22,3 ] 
// const brr= [ [12,3],[55,235,47],[32,65,71],[2,26,18],[null,22,3] ];

// let result = brr[0].concat(brr[1]).concat(brr[2]).concat(brr[3].concat(arr))


// let max=0
// for(let i=0;i<result.length;i++){
//      if(max<result[i]){
//         max=result[i];

//      }

// }

// console.log(max)

// const arr = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 1, name: 'John' },
//     { id: 3, name: 'Joe' },
//     { id: 2, name: 'Jane' }
//   ];  

// const uniqArray=Array.from(new Set(arr.map(ob=>JSON.stringify(ob)))).map(str=>JSON.parse(str))
// console.log(uniqArray)


const str = "aabbcc";

const arr=[]
for(let i=0;i<str.length;i++){

    if(!arr.includes(str[i])){
            arr.push(str[i])
    }else{
        arr.shift(str[i])
    }
}
// 
if(arr.length!=0){
    console.log(arr[0])
}else{
    console.log("No unique character found ):")
}