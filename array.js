
/* Array 

    let <variableName> = [ <element>,<element>,<element> ]
    let <variableName> = [ <0th index>,<1st index >,<2nd index> ]


    INDEX
        - always starts 0 


*/

let fruits = ["apple", "banana", "orange"]

console.log("in 0th index we have", fruits[0]);
console.log("in 1st index we have", fruits[1]);
console.log("befor - in 2nd index we have", fruits[2]);

/* change the value of array element of index 2 */
fruits[2] = "Kiwi"

console.log("after - in 2nd index we have", fruits[2]);
console.log("before -in 3rd index we have", fruits[3]);

fruits[3] = "pinepapple"

console.log("after in 3rd index we have", fruits[3]);

/* #FFFFFF */
/* rgb(255,255,255)*/

let colors = [
    {
        color: "white",
        hexValue: "#000000"
    },
    {
        color: "teal",
        hexValue: "#008080"
    },
    {
        color: "orange",
        hexValue: "#FFA500"
    },
]

let response = {
    data: [
        {
            color: "white",
            hexValue: "#000000"
        },
        {
            color: "teal",
            hexValue: "#008080"
        },
        {
            color: "orange",
            hexValue: "#FFA500"
        },
    ]
}


colors[0]  //  {color:white,hexValue:"#0...}
colors[0].rgb = "rgb(255,255,255)"
colors[1].rgb = "rgb(255,0,255)"

colors[3] = {
    color: "black",
    hexValue: "#000000"
}

console.log(colors);

/* TOOD: change the hex value of white to #FFFFFF */

console.log("before hexvalue of " + colors[0].color + " is " + colors[0].hexValue);

console.log("0th ", colors[0]);
colors[0].hexValue = "#FFFFFF"



console.log("after hexvalue of " + colors[0].color + " is " + colors[0].hexValue);
console.log("hexvalue of " + colors[1].color + " is " + colors[1].hexValue);
console.log("hexvalue of " + colors[2].color + " is " + colors[2].hexValue);


let person = {
    name: "ram"
}

person.name = "Hari"
console.log(person.phone);
person.phone = 1111;
console.log(person.phone);
