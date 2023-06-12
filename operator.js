let persons = [
    {
        first_name: "john",
        last_name: "Doe",
        age: 10
    },
    {
        first_name: "Rajesh",
        last_name: "Hamal",
        age: 20
    },
    {
        first_name: "John",
        last_name: "Wick",
        age: 30
    },
]

// console.log(`name is  ${persons[0].first_name} ${persons[0].last_name} and age is ${persons[0].age} `)
// console.log(`name is  ${persons[1].first_name} ${persons[1].last_name} and age is ${persons[1].age} `)



function printPersonInfo(index){
    console.log(`name is ${persons[index].first_name} ${persons[index].last_name} and age is ${persons[index].age} `)
}

printPersonInfo(0)
printPersonInfo(1)
printPersonInfo(2)



/* 
    loop
     - doing same task  again and again for certain number of times 

        - for loop
             - when we know exect number of iteration
        - while loop
            - when we donot know exact number of iterations/ cycle  BUT we know the condition
        - do while loop
*/


// console.log(0)
// console.log(1)
// console.log(2)



/*  
Operator
    Assignment Operator
     = 
     
     Increment Opertor
        -  Post increment   <varaible>++
        - Pre INcrement ++<variable>

    Arthematic Operator  + - * / % 
       % -> modulous // returns remainder 
       
     Comparisoin Opertor
      < 
      > 
      <=
      >=
      
      equality opertor
      ==
      ===  // strict equality // checks the data-types too
            eg "1" == 1  // true
            eg "1" === 1  // false
      
*/

// console.log(10 / 3 )
// console.log(9 % 3 )


let number = 1
number = 2
number =  number  + 1  // now number = 3

number += 1  // same as above  // 4

number++   // 5
// ++number   // 6

console.log({number})


let age = 20
// console.log("Age", age++)
// console.log("age",age)
console.log("Age", ++age)
console.log("age",age)



// for loop 

// WAP to print from 0 to 10













