/*  */

// findMultiplication(10,1,10)

/* for loop syntax

    for( <initial_value> ; <condition> ; <modifier/incremetor) ){
        do some repetiviteve task. 
    }

*/


/* 5 x 1 = 5 */
/* 5 x 2 = 10 */
/* ...... */
/* 5 x 10 = 50 */

// for (let startingPoint = 1; startingPoint < 4; startingPoint++) {
//     console.log(`5 X ${startingPoint}  =  ${5 * startingPoint}`);
// }

// console.log("end of loop ")


function findMultiplication(number, startFrom, endAt) {

    for (startFrom; startFrom <= endAt; startFrom++) {
        console.log(`${number} x ${startFrom} = ${number * startFrom} `);
    }
}

findMultiplication(4, 1, 10)
findMultiplication(10, 7, 10)






