let age1 = 10
let age2 = age1  //age2 = 10
age2 = 20 // age2 = 20

// console.log({ age1 });
// console.log({ age2 });

let fruit1 = "apple"
let fruit2 = fruit1
fruit2 = "orange"
console.log({ fruit1 });
console.log({ fruit2 });


let person1 = {
    name: "ram",
    dob: "1998",
    address: "ktm"
}


// array and object are called  reference data types

let person2 = person1 // here person2 does not have the copy of person1 values , rather person2 is pointing to the location of person1
person2.name = "hari"

/* ...  sperad operator */


/* ...  rest operator */


let person3 = { ...person1 } // create a new empty object and copying the values of person1
person3.name = "shyam"

console.log(person1)
console.log(person2)
console.log(person3)



function calculateSum(num1, ...rest) {
    console.log(num1)
    // console.log(num2)
    console.log(rest)

}

calculateSum(1, 2)
calculateSum(1, 2, 4, 5, 6,6,8,1000)

