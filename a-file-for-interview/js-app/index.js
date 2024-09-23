// // Write a JavaScript function findTopScorers that performs the following steps
// //     1. Exclude students who have an average score of greater than 75


// // expected output
// // [
// //     { studentId: 1, subjects: [{ name: 'Math', score: 85 }, { name: 'English', score: 78 }] },
// //     { studentId: 2, subjects: [{ name: 'Math', score: 90 }, { name: 'English', score: 88 }, { name: 'History', score: 80 }] },
// //     { studentId: 4, subjects: [{ name: 'Math', score: 95 }, { name: 'English', score: 92 }, { name: 'History', score: 85 }] }
// //   ];





// const studentScores = 
//   [
//     { studentId: 1, subjects: [{ name: 'Math', score: 85 }, { name: 'English', score: 78 }] },
//     { studentId: 2, subjects: [{ name: 'Math', score: 90 }, { name: 'English', score: 88 }, { name: 'History', score: 80 }] },
//     { studentId: 3, subjects: [{ name: 'Math', score: 70 }, { name: 'English', score: 60 }] },
//     { studentId: 4, subjects: [{ name: 'Math', score: 95 }, { name: 'English', score: 92 }, { name: 'History', score: 85 }] }
//   ];

//  const data= studentScores.filter((ele)=>{

//    let red= ele.subjects.reduce((acc,curr)=>{

//     acc=acc+curr.score
//     return acc
//     },0)

//     let ave=red/ele.subjects.length

//     return ave >75
//  })
// console.log(data)
let arr=[{name: 'aks', score: 100},{name: 'ba', score: 85},{name: 'ch', score: 85},{name: 'op', score: 523}]


const numsort=arr.sort((a,b)=>{
  return b.score-a.score;
})


const newName=numsort.sort((a,b)=> a.score==b.score? b.name.localeCompare(a.name):"")

let ind=-1;
newName.map((ele,i)=>{

 console.log(ele.name,ele.score,i)
})
// console.log(newName)



