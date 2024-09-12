
// let name="DJ"
// const obj={
//     name:"kuntal",
//     age:25,
//     greet:function(){
//        return ()=>{
//             return `Hi my name is ${this.name} and I am ${this.age} years old`
//         }
//     },
//    greet1: console.log(this.name)
// }
// console.log(obj.greet()())

// const animal = {
//     speak: function() {
//       console.log('Animal speaks');
//     }
//   };
  
// //   const dog = Object.create(animal);
// const dog={
//     bark : function() {
//         console.log('Dog barks');
//       }
// }
//  dog.__proto__=animal
  
//   dog.speak(); // Animal speaks
//   dog.bark();  // Dog barks
  
// function greet() {
//     console.log('Hello, ' + this.name);
//   }
  
//   const person = { name: 'Alice' };
//   const greetPerson = greet.bind(person);
//   greetPerson(); // Hello, Alice


// class Person {
//     constructor(name,age){
//             this.name=name,
//             this.age=age
//     }
// }

// let person1=new Person("kuntal",25)

// console.log(person1)


// const arr=[1,2,3,4]


// const reducedArr=arr.reduce((acc,curr,i)=>{

// acc[i]=curr*curr
// return acc

// },[])

// console.log(reducedArr)




// const squareArr=arr.map((ele)=> ele*ele)
// for(let i=0;i<arr.length;i++){
//     // arr[i]=arr[i]*arr[i]
// }




const data=[
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
  ]
  
  
let totalbstSc=0;
  data.map((ele)=>{
    // console.log(ele.bestScenes)
//    let bestsc=ele.bestScenes;
// console.log(ele.movieName)      // 1 no ans 1st part
    const bstSc=ele.bestScenes.reduce((acc,current)=>{

        const curr=parseInt(current.duration)

        if((acc)<(curr)){
            acc=curr
        }else{
            acc=acc
        }
        return acc
    // console.log(parseInt(ele.duration.substring(0,2)))
    // console.log(object)
   },0)
   totalbstSc+=bstSc
//    console.log(bstSc)  // 1no ans 2nd part
  })

//   console.log(`Total best scene : ${totalbstSc}`)  // 2no ans

  function uniqueChar(data){

    // let arr=[];
    let arrSet= new Set()

    data.map((ele)=>{
        ele.actors.map((ele)=>{
            arrSet.add(ele)
                    //  console.log(ele)

        })
    })
// arrSet.forEach((value)=>{
//     console.log(value)
// })
return arrSet

  }

// console.log(uniqueChar(data)) ///3 no question

function averageRating(data){

  let count =0;
   const redDta=data.reduce((acc, curr)=>{

    // console.log(acc.rating)

    let cur=curr.rating

    acc+=cur
count++;
    return acc

   },0)
return redDta/count

}
// console.log(averageRating(data)) ///4 no queston 

function AddDescription(data){


            data.forEach((ele, i)=>{
                // console.log(ele)
                 ele. releaseYear=this.releaseYear[i],
                ele.  genure=this.genure[i]
                 
                // console.log(this)
            })
}

let obj ={
  releaseYear:["2010","2009","2008","2006"],
   genure:["action","comedy","horror","drama"]
  }
AddDescription.call(obj,data)

// console.log(data)// 5 no question 

function filterded(data){
  const filteredMovie =  data.filter((ele)=>{
   return ele.movieName==this.myMovie || ele.rating==this.rating;
  //   console.log("this",this.myMovie)
  // console.log(ele.movieName)
})
console.log(filteredMovie)


}

const myObj={
  // myMovie:"The Shawshank Redemption",
  rating:4.8
}
// filterded.call(myObj,data) //6 no question 

function sortedMovie(data){

const srtData=data.sort((a,b)=>{
// console.log(typeof(a.rating))
  if( b.rating!==a.rating){
   return b.rating-a.rating;
  }else{
    return b.movieName.localeCompare(a.movieName)
  }

})
// console.log(srtData)
}


// sortedMovie(data)// 7 no question and the last question 

