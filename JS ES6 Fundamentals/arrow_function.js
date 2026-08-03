// function sayGreet(name){
//     return `Hello ${name}, Good Morning.`
// }


const sayGreet = (name) => {
    return `Hello ${name}, Good Morning.`
}

console.log(sayGreet("Sami"))


const sayHi = (name)=>{
    return `Hello ${name}, Good Morning!`
}

console.log(sayHi("Suhan"))


// const arrowFunction = (a,b,c,...restNumbers)=> {
//     let sum = 0;
//     for(let number of restNumbers){
//         sum+=number
//     }
//     return a+b+c+sum;
// }
// console.log(arrowFunction(10,20,30,40))

const arrowFunction_2=(a,b,c,...rest)=>{
    let sum_2 = 0
    for(let number_2 of rest){
        sum_2+=number_2
    }
    return `Your Sum of the numbers are: ${a+b+c+sum_2}`
}

console.log(arrowFunction_2(1,2,3,4,10))