
let todos = [
    {
        "id": 1,
        "title": "html",
        "completed": true,
    },
    {
        "id": 2,
        "title": "css",
        "completed": true,
    },
    {
        "id": 3,
        "title": "js",
        "completed": false,
    },
    {
        "id": 3,
        "title": "react",
        "completed": false,
    },
    {
        "id": 3,
        "title": "node",
        "completed": false,
    },
    {
        "id": 3,
        "title": "mondob",
        "completed": false,
    },
    {
        "id": 3,
        "title": "express",
        "completed": false,
    },
]


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

todo3 = todos[2]



function printTodoStatus(todo_obj) {
    if (todo_obj.completed) {
        console.log(` ${todo_obj.title}  is completed   `)
    } else {
        console.log(` ${todo_obj.title}  is pending   `)
    }
}


// printTodoStatus(todos[0])
// printTodoStatus(todos[1])
// printTodoStatus(todo3)

/*  Ternary operator  ?   */


/* loop */

/*
    for(<initial value>;condition;moditfor){
        // do some repetiviteve task. 
    }
*/

for (let index = 0; index < todos.length; index++) {
    let todo_obj = todos[index]
    if (todo_obj.completed) {
        console.log(` ${todo_obj.title}  is completed  ${index} `)
    } else {
        console.log(` ${todo_obj.title}  is pending ${index}   `)
    }
}
