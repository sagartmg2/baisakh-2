/*  
    Function

    syntax

    function <functionName>(){

    }
*/


// calaculateDiff

// console.log("(10 - 2) * 2 = ", (10 - 2) * 2);
// console.log("(10 - 10) x 2 = ", (10 - 10) * 2);
// console.log("(10 - 5) x 2 = ", (10 - 5) * 2);
// console.log("(10 - 6) x 2 = ", (10 - 6) * 2);


/* template literal  */

function diffAndMultiply(num1, num2, multiplyBy) { // num1,num2 here is called paramter
    // console.log("num1", num1);
    // console.log("num2", num2);
    // console.log("(" + num1 + " - 2) * 2 = ", (10 - 2) * 2);
    console.log(` ( ${num1}  - ${num2}  * ${multiplyBy}  = ${(num1 - num2) * multiplyBy}`);
    console.log("\n")
}


/* call  / execute / run  */

// diffAndMultiply(8, 5, 3)  // 8,5 is called arguement
// diffAndMultiply(10, 5, 2)  // 8,5 is called arguement



// console.log("hello");

/* spread operator */

// calculateSum(1,2,3,4,5,6)
// calculateSum(1,2)
// calculateSum(1,2,3)




let db_users = []

// db_users[0] = "ram"
// db_users[1] = "shayma"

// console.log(db_users.length);
// db_users[db_users.length] = "shayma"

// console.log(db_users);




/* singup  */


// signupUser("ram","r@r.com")
// signupUser("rambdr","r@rbdr.com")


/* 
    db_users = [
        {
            name:"ram",
            email :"r@r.com"
        },
        {
            name:"rambdr",
            email :"r@rbdr.com"
        }
    ]
*/


/*
    1. create a funciton named signupUser 
    2. create two parameter  name and email
    3. after retriving name and email create a new user object with name and email properties/key
    4. add this new user object to old db_user
*/


function signupUser(name, email) {
    console.log("add user to db_users");
    let user = {
        "name": name,
        "email": email
    }

    // db_users[db_users.length] = user

    db_users.push(user)
}

signupUser("ram", "r@r.com") // [{name:ram....}]
signupUser("hari", "hr@hr.com")
signupUser("hari-2", "hr@hr2.com")
signupUser("ram-2", "rm22@hr2.com")


console.log(db_users);