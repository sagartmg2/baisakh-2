
let students = [
    {
        index: 0,
        name: "ram",
        phone: 1111,
        country: "usa"
    },
    {
        index: 1,
        name: "Hari",
        phone: 222,
        country: "uk"
    },
    {
        index: 2,
        name: "ram",
        phone: 333,
        country: "nepal"
    }
]

// console.log(students)


/* TODO:  WAP to change the names of students present inside students array
        0th index ram -> ram bdr
        2nd index ram -> ram sharma
*/

console.log("before", students);
console.log(students[0].name);
/* update name value of 0th index student */
students[0].name = "ram bdr"
students[2].name = "ram sharma"

console.log("after", students);

console.log(students[3]);
students[3] = {
    index: 3,
    name: "shyam",
    phone: 2323
}

console.log(students);


/* output
    ram's phone is  111
    hari's phone is  222
    ram sharmas's phone is  333
*/




console.log(students[0].name + "'s  phone is " + students[0].phone + " and his country is " + students[0].country);
console.log(students[1].name + "'s  phone is " + students[1].phone + " and his country is " + students[1].country);
console.log(students[2].name + "'s  phone is " + students[2].phone + " and his country is " + students[2].country);


/* tempalte literal  
back tick ` */

console.log(`${students[2].name}'s  phone is ${students[2].phone} and his country is ${students[2].country}  `);

/* Donot repeat Yourself  */
/*  function   */
/*  arrow function   */