/* Varaibles */
/* 

    Data types
        primitive data types
            String - text
            number
                - int
                - float /double / decimal
            Boolean
                - true / false
            undefined  // in javascript only
            null
        
        non-primitive (collections / reference data types)
            - array
    
 */


let brand = "apple";

let color;  // variable declartion
color = "white"  // initialization

let isPaid = true;
let isMarried = false;


let age = 20
let price = 1000.50

console.log(brand)
console.log("prev-color", color)
color = "red"  // re-initalzation
console.log("after-color", color)

const PI = 3.14;
// PI = 3.1454  // cannot re-assign constant varia

/* var vs let vs const */

var name = "ram"
var name = "ram"


let surname = "XYZ"
// let surname = "XYZ" // cannot redeclare variables declared with let keyword 
surname = "ABC"



console.log(name);
console.log(surname);

let watch_price;

console.log("before-assigning", watch_price);

watch_price = 1000
console.log("after assigning", watch_price);



let apiData = null // when we have to define things as empty explicitily


let name1 = "ABC"
let name2 = "DEF"
let name3 = "XYZ"

// let names = "ABC","CDE","XYZ"

// let names = "ABC, CDE, XYZ" //  XXX not right way 


/* 
    Array 
        - collection of different values
    
    syntax
    let <variable_name>
*/
let name4 = "IJK"

let names = ["ABC", "DEF", "XYZ", name4]
let brands = ["apple", "samsung"]

console.log("names", names);
console.log("brands", brands);


let ages = [10, 20, 40]
console.log("ages", ages);

let arr = ["string", 10, true, false, null, undefined]
console.log(arr);


let projectorSellingPrice = 5000
let projectorCostPrice = 400
let projectorColor = "white"
let projectorBrand = "XYZ"
let projectorMfd = "2022-05-05"
// console.log(projectorMfd);


// let projectors = [5000, 4000, "white", "XYZ"]

// console.log(projectors);

/*  OBJECT
    let <object_name> = {
        <key> : <value> ,
        <property> : <value> ,
        <attribute> : <value> ,

    }
*/

let projector = {
    sellingPrice: 5000,
    costPrice: 400,
    "color": "white",
    brands: ["XYZ", "ABC"]
}

console.log(projector);








