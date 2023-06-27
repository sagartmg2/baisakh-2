const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '1234567';  // @#$@#$!@#$!@#$!@#

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash)=>{
    // Store hash in your password DB.
    console.log(hash)
});