
let numbers = [2, 3, 4, 5, 10, 20]
let evenNumbers = []  // [2,4,10,20] // filter from above numbers varaiable 
/* 
    loop for original numbers variable
    and in each loop check if the number is even, 
        if even, push in array evenNumbers  // to find even odd use <number> % 2
*/

// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i] %2 == 0){
//         evenNumbers.push(numbers[i])
//     }
// }

// numbers.forEach((number) => {
//     if (number % 2 == 0) {
//         evenNumbers.push(number)
//     }
// })

/* falsy values : null undefined 0 NaN "" false */

numbers = [2, 3, 4, 5, 10, 20]
evenNumbers = numbers.filter((number) => {
    if (number % 2 == 0) {
        return true;
    }
})

evenNumbers = numbers.filter(number => (number % 2 == 0))

console.log(evenNumbers)


let ages = [10, 20, 30, 40, 40, 23]
// let agesStr = ["Age is 10", "age is 20",...]

agesStr = ages.map((age) => {
    return "age is" + age
})
// agesStr = ages.map((age) => "age is" + age)
// console.log(agesStr)
