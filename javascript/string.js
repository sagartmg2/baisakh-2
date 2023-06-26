
let person = {
    name: "ram",
    phone: 111
}

console.log("phone num of " + person.name + " is " + person.phone);

/* Template Literal 
        back tick `    //  just below esc key
*/

console.log("this is string");
console.log('this is string');
console.log(`this is string`);

console.log(`phone num of ${person.name} is ${person.phone} `);


let courses = ["web", "mern"]  // [ 0th, 1st]
console.log(`before in 0th index we have ${courses[1]} `);
courses[1] = "mern-stack"
courses[2] = "python"
console.log(`after  in 0th index we have ${courses[1]} `);
