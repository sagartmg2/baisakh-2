
const number = 100 // global scoped variable

function dobule(num){ // let num = 10 // block scoped variable
    num = num*2
    console.log("inside double function",number)
    console.log({num})
}

function triple(num){ // let num = 3 // block scope variable
    console.log("triple",num*3)
} 

triple(3)

dobule(10)
console.log({number})
// console.log({num})


if(true){
    let  currentStatus = true
}
// console.log({currentStatus})
