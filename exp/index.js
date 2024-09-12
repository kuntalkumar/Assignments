function fullName (fname,midname,lname){

    if(typeof(+fname)==="string"&&typeof(fname)==="string"&&typeof(fname)==="string"){

        console.log(fname," ",midname," " ,lname)
    }else{
        console.log("Please provide a valid string")
    }

}
const fname="98"
const midname="Don"
const lname="Kumar"

fullName (fname,midname,lname)


