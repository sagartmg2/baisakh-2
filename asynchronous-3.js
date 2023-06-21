
/* synchronous vs asynchronous 
        code runs line by line


    asynchronous
        - code runs in background
        - dodnot block remaing codes

*/



/* OOP object oriented Programming 

    Class  - blueprint of an object
*/


let vehicle1 = {
    name: "bmw",
    drive: () => {
        console.log("driving..")
    }
}

let vehicle2 = {
    name: "audi",
    drive: () => {
        console.log("driving..")
    }
}

// vehicle1.drive()
// vehicle2.drive()


class Vechile {
    constructor(name) {
        this.name = name
    }

    drive() {
        console.log("drving....")
    }
}


// let vechile3 = new Vechile("ferarri")
// let vechile4 = new Vechile("bnnz")
// vechile3.drive()

// console.log("vehicle3", vechile3)
// console.log("vehicle4", vechile4)
// vechile4.drive()



/* Promise
        stages 
            - pending
            - resolve
            - reject
*/

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("server error")
        // resolve("the promise has been complted/fulfilled/rsolved")
    }, 3000)
})

console.log(promise1)

promise1.then((response) => {
    console.log(response)
}).catch(err => {
    console.log(err)
})


console.log("after promise...");
