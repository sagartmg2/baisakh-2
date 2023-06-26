
/* synchronous vs asynchronous 
     sync
        code runs line by line


    asynchronous
        - code runs in background
        - dodnot block remaing codes


*/

function showPop() {
    console.log("show popuup");
    return undefined
}

// setTimeout(showPop, 3000)

setTimeout(() => {   // here the arow fucntion is called anonymous function
    console.log("show popu.up using arrow function")
}, 3000)


console.log(1);
console.log(2);
console.log(3);
console.log(4);

function doTaskOne() {
    console.log("task one");
    for (let index = 0; index < 10; index++) {
        console.log("indx", index);
    }
    doTaskTwo()
}


const doTaskTwo = () => {
    console.log("task two");
}

console.log("befor funciton");
doTaskOne()




