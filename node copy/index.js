// console.log("javascirpt");
// console.log(__filename)
// console.log(__dirname)

/* global objects
        require
        module
        
*/
/* node modules
        CommonJS module system VS ESMOdule system
            commonjs
                - module.exports
                - require
            esmodulesystme
                -export 
                -import

        - core module
            - path 
            - fs
            - http  // create api  // express is built over http module
        - third party modules   
            eg: brcypt 
        - local module


*/

const createProduct = () => {
    /* take request from user */
    /* validation  */
    /* store in DB  */
    /* handle errors  */
    /* send response*/
}

// const auth = require("./auth")
// console.log({auth})

// auth.login()
// auth.signup()

/* named import */
// const auth = require("./auth")
// const {signup,login} = auth

// const {signup,login} = require("./auth")

import { signup, login } from "./auth.js"
signup()
login()




