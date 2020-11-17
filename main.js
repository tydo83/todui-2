const readline = require('readline');


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

const handleMenu = function(cmd) {
  if (cmd === '6') {
    console.log('Quitting!')
    interface.close();
  } else {
    console.clear();
    console.log('Type 6 to quit!');
    interface.question(menu, handleMenu);
  }
};

console.clear();
interface.question(menu, handleMenu);
