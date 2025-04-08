# Writing a Function in JavaScript


In JavaScript, **FUNCTIONS** are blocks of reusable code. They allow you to 
- Bundle functionality
- Bake it more readable
- Avoid repetition 
![Coding Concept](https://cdn3.iconfinder.com/data/icons/web-development-41/512/2-512.png)

Here's a brief tutorial on writing an arrow function in JavaScript.

## 1. Basic syntax

```javascript
const functionName = (params) => {
  // code to be executed
} 
```
### Explanation
- **`const`** : const should be used whenever a function expression is assigned to a variable.
- **The function name** : The name you choose for the function.
- **Parameters** : Optional comma separated parameters. This is the data passed into the function. If there are no parameters, the () is still required.
- **The arrow syntax `=>`**: Indicates that this will be a function.
- **The body** : The statements that make up the function itself. Surrounded by curly braces.

### Example:
```javascript
const greet = (name) => {
  console.log("Hello, " + name + "!");
}
```

> Tip: Functions often perform actions, so naming with a verb can make it clear what the function does. Examples include `fetchData( )`, `calculateArea( )`, or `printReport( )`. 

## 2. Calling a function

To execute the function, you call or invoke it by using its name followed by parentheses.

### Example:
```javascript
greet('Alice'); // Outputs: Hello, Alice!
```
## 3. Return values

Functions can process data input and output a value using the `return` keyword.

### Example: 
```javascript
const addNums = (numA, numB) => {
  return numA + numB
}

const total = addNums(2, 4);

console.log(total) // Expected value: 6
```
----
> *For more information on functions and how they are used in JS, check out the [MDN docs](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

