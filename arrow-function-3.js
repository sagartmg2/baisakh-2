let arr = [2, 4, 10, 20]

let doubledArray = []

/* code here */
/* 
    loop for each and every element of our original array
        in each and every loop push doubled value in dobuledArray
*/

// for (let i = 0; i < arr.length; i++) {
//     doubledArray.push(arr[i] * 2)
// }

// arr.forEach((number,idx) => {
//     doubledArray.push(number * 2)
// })


/* ARRAY.MAP FUNCTION 
            returns new array with exact same length as our original array
*/

/* 
*/
let numbers = [2, 3, 4, 5, 10, 20]
let doubledNumbers = numbers.map((number, index) => {
    console.log(number, "-", index)
    return number * 2
})


console.log(numbers) // 
console.log(doubledNumbers) // [4,8,20,40]


let evenNumbers = []  // [2,4,10,20] // filter from above numbers varaiable 
/* 
    loop for original numbers variable
    and in each loop check if the number is even, 
        if even, push in array evenNumbers  // to find even odd use <number> % 2
*/

// .filter 
// .find 