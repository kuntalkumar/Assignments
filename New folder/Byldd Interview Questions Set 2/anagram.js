// Write a function that detects whether the word is an anagram. An anagram is a pair of words that use the same letters in a different order. 

function anagram (word1, word2) {
// console.log(word2.length)
        if(word1.length!=word2.length){
            console.log(false)
            // ret/urn false
        }
        else{

                let arr1=[...word1]
                let arr2=[...word2]

                arr1.sort((a,b)=> a.localeCompare(b))
                arr2.sort((a,b)=> a.localeCompare(b))

                console.log(arr1)
                console.log(arr2)

                for(let i=0;i<arr1.length;i++){


                    // console.log(arr2[i])
                    if(arr1[i].toLocaleLowerCase()===arr2[i].toLocaleLowerCase()){

                        
                    }
                    else{
                        console.log(false)
                        return 
                    }
                   

                }
                console.log(true)
                    return
        }


}

// console.log("A".toLocaleLowerCase())
// anagram()

// anagram('finder', 'Friend') 

// if(res){
//     console.log(true)
// }else{
//     console.log(false)
// }
//  --> true
anagram('hello', 'Hifye')
//  --> false