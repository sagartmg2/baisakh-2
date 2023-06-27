// console.log("javascirpt");
// console.log(__filename)
// console.log(__dirname)

/* global objects */
/* node modules
        - core module
            - path 
            - fs
            - http  // create api  // express is built over http module
        - third party modules   
            eg: brcypt 
        - local module
*/

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '1234567';  // @#$@#$!@#$!@#$!@#

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash)=>{
    // Store hash in your password DB.
    console.log(hash)
});

