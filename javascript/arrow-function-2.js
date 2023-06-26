var name;
/* 
    [
        { 
            name:ram,
            email:email@e.cim.com,
            password:password
        },
        { 
            name:shyam ,
            email:email@e.cim.com,
            password:password
        },

    ]

*/

let db_users = []

/* function sinupUser(name, email, password) {

    console.log("add new user");
    db_users.push({
        "name": name,
        "email": email,
        "password": hashPassword(password)
    })

} */

/* arrow funciton synstax
    let <functionName> = (  ) => {

    }

*/

/* arro funciton way 1 */
/* const hashPassword = (password) => {
    // som othe rlogics..
    return password + Date.now()
} */

/* arrow function way 2 */
const hashPassword = password => password + Date.now()


let sinupUser = (name, email, password) => {

    db_users.push({
        "name": name,
        "email": email,
        "password": hashPassword(password)
    })
}



sinupUser("ram", "email", "password")
sinupUser("shya", "email", "password")
sinupUser("hari", "har@h.com", "12345678")

// console.log(db_users)


/* function hashPassword(password) {
    // lots of logic to has password 
    return  password + Date.now()
    let hased_password = password + Date.now()
    return hased_password
    console.loog(hased_password)
} */



// hashPassword(123123)
// hashPassword(123123)
// hashPassword("password")


function sum(num1, num2) {
    return num1 + num2
}

// let result = sum(1, 2)
// console.log("sum of 1 and 2 is", result)
// console.log("sum is", sum(10, 2))


/* hoisting */


/* function deleteUser() {
    console.log("user has been delte..");
} */

const deleteUser = () =>{
    console.log("user has been delte..");
}
deleteUser()



// console.log({ name })
// let name = "ram"
