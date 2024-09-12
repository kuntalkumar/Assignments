const data=[
    {
      "bookTitle": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publicationYear": 1960,
      "genres": ["Fiction", "Classic"],
      "ratings": 4.9,
      "chapters": [
        {
          "title": "Chapter 1: Maycomb",
          "pageCount": 15
        },
        {
          "title": "Chapter 2: School",
          "pageCount": 12
        }
      ]
    },
    {
      "bookTitle": "1984",
      "author": "George Orwell",
      "publicationYear": 1949,
      "genres": ["Dystopian", "Science Fiction"],
      "ratings": 4.8,
      "chapters": [
        {
          "title": "Chapter 1: The World of 1984",
          "pageCount": 20
        },
        {
          "title": "Chapter 2: Thoughtcrime",
          "pageCount": 18
        }
      ]
    },
    {
      "bookTitle": "Moby Dick",
      "author": "Herman Melville",
      "publicationYear": 1851,
      "genres": ["Adventure", "Classic"],
      "ratings": 4.3,
      "chapters": [
        {
          "title": "Chapter 1: Loomings",
          "pageCount": 25
        },
        {
          "title": "Chapter 2: The Carpet-Bag",
          "pageCount": 14
        }
      ]
    },
    {
      "bookTitle": "Pride and Prejudice",
      "author": "Jane Austen",
      "publicationYear": 1813,
      "genres": ["Romance", "Classic"],
      "ratings": 4.7,
      "chapters": [
        {
          "title": "Chapter 1: The Bennets",
          "pageCount": 10
        },
        {
          "title": "Chapter 2: Mr. Bingley",
          "pageCount": 8
        }
      ]
    }
  ]
  
function maxPage(data){

data.map((ele)=>{0
    // console.log(ele.bookTitle)
   const higestPagecount= ele.chapters.reduce((acc,cur)=>{
        const curr=cur.pageCount;

      return curr>acc?curr: acc
    },0)
// console.log(higestPagecount)
})


}

   maxPage(data)




//    const array=[1,2,3,4,5,[6]]
// //    const newArr=[...array]
// const newArr=JSON.parse(JSON.stringify(array))

//    newArr[5].push(8)
//    console.log("Array",array)
//    console.log("New A",newArr)

// function toggleFlag(flag) {
//     flag = !flag;
//   }
//   let isActive = true;
//   toggleFlag(isActive);
//   console.log(isActive);
//   function modifyNestedArray(arr) {
//     arr[0][0] = 100;
//   }
//   let nestedArr = [[1, 2], [3, 4]];
//   modifyNestedArray(nestedArr);
//   console.log(nestedArr);
  function incrementNumber(num) {
    num.value++;
  }
  let numObj = new Number(10);
  incrementNumber(numObj);
//   console.log(numObj.value);

// console.log(typeof(numObj))
function modifyFunction(fn) {
    fn.message = 'Changed!';
  }
  function myFunc() {
    
  }
  modifyFunction(myFunc);
//   console.log(myFunc.message);

function addProperty(obj) {
    obj.newProp = 'Added';
  }
  let myObj = { existingProp: 'Value' };
  addProperty(myObj);
//   console.log(myObj);
function modifyArray(arr) {
    arr.push(5);
  }
  let numbers = [1, 2, 3];
  modifyArray(numbers);
//   console.log(numbers);

function changeString(str) {
    str = str.toUpperCase();
  }
  let text = 'hello';
  changeString(text);
//   console.log(text);
function greet(message = 'Hello') {
    message = 'Hi';
    // console.log(message);
  }
  greet();
  
  function updateNumber(n) {
    n = 20;
  }
  let num = 10;
  updateNumber(num);
//   console.log(num);

  
  
function updateObject(obj) {
    obj.value = 30;
  }
  let data1 = { value: 20 };
  updateObject(data1);
//   console.log(data1.value);
function reassignArray(arr) {
    arr = [4, 5, 6];
  }
  let nums = [1, 2, 3];
  reassignArray(nums);
//   console.log(nums);

let original = { a: 1, b: { c: 2 } };
let copy = Object.assign({}, original);
// let copy={...original}
// let copy={}
// copy.__proto__=original
// let copy=Object.create(original)
copy.b.c = 3;
// console.log(original.b.c);

  
// function add(a, a, c) { // No error
//   // "use strict"
//   return a + a + c;
// }
// console.log(add(1, 2, 3)); // Output: 7 (a is 2 in the second position)

// function name() {
//   // "use strict"
//   console.log(this)
// }
// name()
