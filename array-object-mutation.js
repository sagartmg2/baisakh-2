/* variable
    let <varaible_name> = <value>
*/
let color = "white"
/* 
    DATA TYPES 
        - string   // text
        - number
        - boolean // true / false
        - undefined  // variable declared but not initialized
        - null // explicitely defining value as empty 
    
        - array
        - object

*/

let watchPrice; // this is only declared but not initialzied // so this will print undefined


/* array 
    - collection of different values
    - usually it is colleciton of similar data-types
*/

// let students = ["ram", "shyam", "ram"] // array of string

let student1 = {
    name: "ram",
    phone: 1111
}

let student2 = {
    name: "Hari",
    phone: 222
}

let student3 = {
    name: "ram",
    phone: 333
}

let students_1 = [student1, student2, student3]


let students = [
    {
        name: "ram",
        phone: 1111
    },
    {
        name: "Hari",
        phone: 222
    },
    {
        name: "ram",
        phone: 333
    }
]

// console.log(students)


/* TODO:  WAP to change the names of students present inside students array
        0th index ram -> ram bdr
        2nd index ram -> ram sharma
*/



let price = 10000
price = 20000 // re-initialze // update variable value
price = 30000 // re-initialze // update variable value



let person = {
    name: "john doe",
    country: "usa",
    phone: 111
}

let person_2 = {
    name: "mary jane",
    country: "uk",
    phone: 111
}

console.log(person_2.phone);  // get value of a single key/property in an object
console.log("beofre person2 :", person_2);
// person_2 = "mary jane" // this will replace whole object by string
person_2.phone = 3333
person_2.isMarried = false
console.log("ater person2 :", person_2);
console.log("unknown age property", person_2.age);



// let browsers = [0th,1st,2nd]
let browsers = ["chrome", "firefox", "ms-word"]
console.log("before", browsers);
console.log(browsers[2]) // get value of index 2 of array browsers
browsers[2] = "ms-edge" // update value of index 2 of array browsers
console.log("after", browsers);
console.log("unknow index in array ",browsers[3]);
browsers[3] = "brave"

console.log("after-adding-", browsers);


