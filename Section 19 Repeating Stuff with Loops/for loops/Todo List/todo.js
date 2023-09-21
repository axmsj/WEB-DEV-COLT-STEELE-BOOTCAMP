// let input = prompt("What would you like to do?");
// const todos = ["Collect Eggs", "Clean Litter Box"];

// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("****************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log("****************");
//   } else if (input === "new") {
//     const newToDo = prompt("Okay, what is the new to do");
//     todos.push(newToDo);
//     console.log(`${newToDo} added to the list`);
//   } else if (input === "delete") {
//     const index = parseInt(prompt("Ok, enter an index to delete:"));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Ok, deleted ${deleted}`);
//     } else {
//       console.log("Unknown Index");
//     }
//   }
//   input = prompt("What would you like to do?");
// }
// console.log("Okay, you quit");

let input = prompt("What would you like to do?");
const todos = ["Collect Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("**************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**************");
  } else if (input === "new") {
    const newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log(`${newTodo} has been added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Okay, what do you want to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted}`);
    } else {
      console.log("Unknown Index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("Okay, you quit");
