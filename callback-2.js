/* callback 
         a funciton passed as arguemnt to another function

    - call me back 
*/




function doTaskOne(callback) {
    console.log("task one");
    for (let index = 0; index < 10; index++) {
        console.log("indx", index);
    }
    callback()
}

const doTaskTwo = () => {
    console.log("task two");
}


doTaskOne(doTaskTwo)


