// let name = 'Sami'
// // let location = `Sheikhghat, sylhet`

// // console.log(location)

// let price = 500
// // let message = `hello, ${name}, your bill is ${price}`
// // console.log(message)

// let price_another = 550
// let sum =  `hello, ${name}, your total price is: ${price + price_another}`
// // console.log(sum)


// let amount = 2500

function admissionConfirmationMail(name, amount){
    let message = `hello, ${name || "student"},
               Your payment is successful.
               Your paid amount is ${amount}`
               return message;
}


console.log(admissionConfirmationMail('sami', 2500))
console.log(admissionConfirmationMail('', 500))