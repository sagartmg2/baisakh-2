
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
    "title": "hyper text markup language",
    "completed": false,
}

let todo2 = {
    "id": 1,
    "title": "css",
    "completed": true,
}

let todo3 = {
    "id": 3,
    "title": "js",
    "completed": false,
}


/* 
    html is complte
    css is complte
    js is pending

*/


// if (false) {
//     console.log("do some true task..");
// } else {
//     console.log("do something else");
// }


if (todo1.completed) {
    console.log(` ${todo1.title}  is completed   `)
} else {
    console.log(` ${todo1.title}  is pedning   `)
}

if (todo2.completed) {
    console.log(` ${todo2.title}  is completed   `)
} else {
    console.log(` ${todo2.title}  is pedning   `)
}

if (todo3.completed) {
    console.log(` ${todo3.title}  is completed   `)
} else {
    console.log(` ${todo3.title}  is pedning   `)
}