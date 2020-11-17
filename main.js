const readline = require('readline');
const data = require('./data.js');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

// const handleMenu = function(cmd) {
//   if (cmd === '6') {
//     console.log('Quitting!')
//     interface.close();
//   } else {
//     console.clear();
//     console.log('Type 6 to quit!');
//     interface.question(menu, handleMenu);
//   }
// };

const todos = data.todos;

const add = (str) => {
  todos.push({
    text: str,
    isComplete: false,
    priority: 2
  })
  todoMenu();
  interface.question(menu, handleMenu);
}

// Switch ver
const handleMenu = cmd => {
  switch(cmd) {
    case '1':
      console.clear();
      interface.question('What should go on your todo list?\n', add);
      break;
    case '2':
    case '3':
    case '4':
    case '5':
      console.clear();
      console.log('This feature is under construction, check back later!')
      console.log('Type 6 to quit!');
      interface.question(menu, handleMenu);
      break;
    case '6': 
      console.log('Quitting!')
      interface.close();
      break;
  };
};

const todoMenu = () => {
  console.log('Here are your todos:')
  for(const todo of todos) {
    console.log(`* ${todo.text} - ${todo.isComplete} - ${todo.priority}`);
  }
}

console.clear();
todoMenu();
interface.question(menu, handleMenu);
