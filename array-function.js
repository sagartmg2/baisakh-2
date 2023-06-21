

let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
    { name: 'Yogesh', email: 'yogesh@gmail.com', password: 'yogesh38' },
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
    { name: 'Urmila', email: 'urmila@gmail.com', password: 'urmila37' },
]

/* 
loginUser("yogesh@gmail.com","yogesh38") // login successful
*/

// function loginUser(){
// }

const loginUser = (email, password) => {
    /* check if it matches... */

    let matched = false;

    // for (let index = 0; index < db_users.length; index++) {

    //     let user = db_users[index]
    //     if (user.email == email && user.password == password) {
    //         console.log("matched...")
    //         matched = true
    //         break;
    //     }
    //     console.log("loop-index", index)

    // }


    db_users.forEach(user => {
        if (user.email == email && user.password == password) {
            matched = true
        }
    })




    if (matched) {
        console.log("login success.")

    } else {
        console.log("invlaid");
    }

    return matched

}



const result = loginUser("yogesh@gmail.com", "yogesh386") // login successful
// console.log({result})


let fruits = ["apple", "orage", "kiwi"]

// for (let index = 0; index < fruits.length; index++) {
//     console.log(`in index ${index} we have ${fruits[index]}`);
// }

/* array functions
    -forEach
*/


fruits[3] = "banana"
fruits.push("peach")

fruits.unshift("pear")



function printInfo(element, index) {
    console.log(element, index);
}

// fruits.forEach(printInfo)
// fruits.forEach((fruit, index) => console.log(fruit, index))
console.log(fruits)
fruits.pop()
fruits.shift()
fruits.splice(1,2)
fruits.splice(1,0,"mango")

console.log(fruits)





