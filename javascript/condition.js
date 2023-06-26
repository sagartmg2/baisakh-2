/* condition

    SYNTAX 

    if( <condition>  ){
        do true case task
    }else{
        do something else
    }



*/


let willRain = true;
let hasProbability = true;

if (willRain) {
    console.log("take umbrella");
} else {

    if (hasProbability) {
        console.log("You may take it. ")
    } else {
        console.log("No need.");
    }
}

console.log("_________________");

if (willRain) {
    console.log("take umbrella");
} else if (hasProbability) {
    console.log("You may take it. ")
} else {
    console.log("no need");
}

/* Ternary operator ? */
/* Falsy values */




// if (false) {
//     console.log("true case ");
// } else {
//     console.log("false case");
// }


minAge = 18
herAge = 19
hasConsent = false

if (herAge >= minAge) {

    if (hasConsent) {
        console.log("she can .. ");
    } else {
        console.log("she cant");
    }

} else {
    console.log("she cant'");
}


if ((herAge >= minAge) && hasConsent) {
    console.log("she can marry");
} else {
    console.log("she cant");
}



/* Logical Operator

    AND   &&
        when both the right handl side value and left hand side value is true, it will give true

    OR  ||
        returns true, if any one of the value is true
    NOT  !
        make our value opposition

*/



let todos = [
    {
        "id": 1,
        "todo": "html",
        "completed": true,
    },
    {
        "id": 2,
        "todo": "css",
        "completed": true,
    },
    {
        "id": 3,
        "todo": "js",
        "completed": false,
    },
]


let todo1 = {
    "id": 1,
    "todo": "html",
    "completed": true,
}

let todo2 = {
    "id": 1,
    "todo": "css",
    "completed": true,
}

let todo3  ={
    "id": 3,
    "todo": "js",
    "completed": false,
}


/* 
    html is complte
    css is complte
    js is pending

*/



