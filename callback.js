let persons = [
    { name: "ram" },
    { name: "shyam" },
    { name: "shyam" },
    { name: "shyam" },
    { name: "shyam" },
    { name: "shyam" },
    { name: "shyam" },
    { name: "shyam" },
]

function doTaskOne() {
    console.log("do task one");
    doTaskTwo()
    console.log("after task  one");

}

function doTaskTwo() {
    console.log("do task two");
}

doTaskOne()


function doSomething() {
    console.log("do something")
    return 1212
}

/* callback 
        - a function  passed as an arguement to another funciton
*/

// console.log(   1212   )

persons.forEach((el, index) => {
    // let country = countries[index]
    console.log(el, index)
})


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);