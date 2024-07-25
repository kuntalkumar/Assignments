// let arr =[10,12,0,2,4,7,20,12,20]


// let newArr= [...new Set(arr)]




// let max=0;

// let freq=0;

// for( let i=0;i<newArr.length;i++){
//     if(max<newArr[i]){
//         max=newArr[i];

//         freq=max
        
//     }

// }

// console.log(freq)



// let temp =-1;
// for( let i=0;i<newArr.length;i++){

//     if(temp<newArr[i] && newArr[i]<max){
//             temp=newArr[i];
//     }

//     }    



// *
// **
// ***
// ****
// *****
let arr=[]
for(let i=1;i<6;i++){

    let freq="*"

    for(let j=1;j<i;j++){
        freq+="*";
    }

    
    arr[i]=(freq)

    console.log(arr[i])

}
