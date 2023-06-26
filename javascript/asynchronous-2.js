
/* synchronous vs asynchronous 
        code runs line by line


    asynchronous
        - code runs in background
        - dodnot block remaing codes

*/
function sum(num1, num2) {
    console.log("sum=", num1 + num2)
}

console.log(1);
sum(1, 2)

function callMeBack() {
    console.log("called back");
}

setTimeout(callMeBack,3000)

setTimeout(() =>{
    console.log("called back again")
},3000)

console.log(2);
for (let index = 0; index < 10; index++) {
    console.log("indx", index);
}
console.log(3);

