function registerStudent(cb){
    console.log("user is registering. need more data!")
    cb()
}


function userBasicInfo(){
    let student = {
        name: "sami",
        age: 25,
        roll: 7
    } 
    // console.log(student)

}


function pastAcademicInfo(){
    let academicInfo = {
        ssc: "5.00",
        hsc: "5.00"
    } 
    // console.log(academicInfo)
}

// console.log(registerStudent(userBasicInfo))
// console.log(registerStudent(pastAcademicInfo))


function calculator(a,b, cb){
    let sum = a+b
    cb(sum)
}

function displayResult(result){
    console.log(result)
}


calculator(5,5, displayResult)
calculator(5,50, displayResult)