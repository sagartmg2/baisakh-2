/* 
    Object
    
    let <object_name> = {
        <key/ property / attribute>  : <value>,
        <key/ property / attribute>  : <value>,
        <key/ property / attribute>  : <value>,
    }

*/



/* TAsk : create an object of your room */

/* color, windowcount , dimesniosn */

// let room_color = "green" 

let room1 = {
    color: "green",
    doorCount: 2,
    dimensions: {
        length: {
            value: 10,
            unit: "meter"
        },
        width: {
            value: 100,
            unit: "feet"
        },
        height: {
            value: 100,
            unit: "inch"
        },
    }
}

/* room1's length is 10 meter */

let room2 = {
    color: "purple",
    doorCount: 2,
    dimensions: {
        length: {
            value: 10,
            unit: "meter"
        },
        width: {
            value: 100,
            unit: "feet"
        },
        height: {
            value: 100,
            unit: "feet"
        },
    }
}


// let rooms = ["rom1", "room2", "room3"] 

let rooms = [
    { color: "green", dimension: "100 100 100" },
    { color: "red", dimension: "100 100 100" },
    { color: "red", dimension: "100 100 100" }
]

let fruit1 = {
    name: "apple",
    calories: 50
}

// let courses = ["web", "mern", "python"]


let teacher2 = {
    name: "ram",
    phone: 1222,
    address: "addres-2"
}


let courses = [
    {
        title: "web",
        price: 1500,
        duration: 3,
        teacher: {
            name: "xyz",
            phone: 111,
            address: "address..."
        },
        shift: ["morning", "evening"]
    },
    {
        title: "mern",
        price: 1400,
        duration: 2,
        teacher: teacher2
    },
    {
        title: "python",
        price: 1300,
        duration: 2.5,
        teacher: teacher2,
        shift: ["morning"]
    },
]



// console.log(courses);

/* output : ijk's number is 1222 */
console.log(teacher2.name + "'s number is " + teacher2.phone);
/* Reserach on template literal  */


let firstName = "ram"
let lastName = "sharma"
lastName = "Bdr"
/* his name is ram sharma.. */

let fullName = firstName + " " + lastName

console.log("his name is " + fullName);




let myLaptop = {
    brand: "acer",
    generation: "I5",
    processor: "I5",
    price:10000
}


console.log("befor", myLaptop.processor);

myLaptop.processor = "I7"

console.log("after", myLaptop.processor);
console.log("price", myLaptop.price);


// let colors = ["white", "orange", "teal"]
let teal = {
    hexValue: "#AAAAA",
    color: "teal",
    color: "teal-change",
    Color: "TEAL",
}

let colors = [
    {
        color: "white",
        hexValue: "#FFFFFF"
    },
    {
        color: "orange",
        hexValue: "#FFDEF"
    },
    teal
]

console.log(teal.hexValue);
console.log(teal.color);
console.log(teal.Color);



