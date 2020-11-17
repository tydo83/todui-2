# TodUI 2 - TWOdo

### Printing Our Todos
* Check out `data.js`. Get to know the structure of the `todos` property - an array of objects where each object has:
    * a `text` property that's what the todo IS
    * a `priority` property that's currently either `1` or `2`
    * an `isComplete` property that' a boolean describing whether the todo is done or not
* Pull in the exported `data` from `data.js` using `require`
* Save the `todos` property from that object into a variable called `todos`
* Before you ask the menu question at the bottom of the file, loop through the todos and print out each one's `text` property. Maybe print out first something like "Here are your todos:". Run your code and see if it prints out the todos!
* It looks hard to read... Print out a `*` and a space before each todo's `text` so that we get a nice bullet list.


### A Better Menu

* Now let's supe up our menu-handling function. First, let's add if/else's (or switch cases) for numbers 1-5, and for each one, just console.log something like "This feature is under construction, check back later!" or something. And then continue the loop, asking the followup `interface.question`, giving it  the menu and your menu-handling function again. Basically, this will do what you did before, but now at least we're telling them that this will be implemented, and giving ourselves a space in which to write code when we DO start implementing them.
* Try it out with 1 and 2 and 3 and 4 and 5 and even 6 just to make sure there are no holes in your logic! You shoudl always see your under construction message or (in the case of 6) it should quit.
* Now let's start implementing adding todos. You'll do another `interface.question` if they type in a 1, and your question can be something like, "What should go on your todo list?". For the function it will  call, call it `add`, and we'll make it momentarily.
* OPTIONAL ABSTRACTION STEP
* Define your `add` function. For now, let's test our structure by printing out its parameter. It SHOULD be the answer we put to the question of what to put on our todo list.
* Below that printing of the parameter, copy and paste in your loop that goes through the `todos` and prints them out as a bullet list. If we do it right in a following step, it will be updated with their new todo!
* Below that todo-printing-loop, return to the menu by asking the `interface.question` menu question once more. So they can add another todo or quit. (Althoughreturn to the menu by asking the `interface.question` menu question once more, so they can add another todo or quit. (Although, again... we haven't quite got adding working yet!)
* Okay, let's add. Instead of just printing out their response, let's make a new todo object with an `isComplete` property of `false` (it's not a new todo if it's already done!) a starting `priority` property of `2` (or... your choice... we're not really doing anything with priority in this app!), and a `text` property that's the string he user typed in (our parameter). Now! `push` or `unshift` the todo into our `todos` array, and the loop below will print out our new todo.
* Try it out! You should be able to enter 1 at the menu, add a todo, see it printed out, get another menu, and repeat the process until you decide to quit.

And you're done until the next part!
