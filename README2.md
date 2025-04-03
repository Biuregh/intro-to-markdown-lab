<link rel="stylesheet" type="text/css" href="./css/style-md.css">

# Text Length Calculator

![Coding Concept](https://media.gettyimages.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.jpg?s=170667a&w=gi&k=20&c=Hc0j45IE9SkCEEHZ6s8FlZS1WRDVCFFBZjILP1_Wb08=)

This document provides a simple JS program that calculates the length of a given text.

--- 

## Setup HTML File

In order to get a pretty simple webpage that can recive a text and return the length of that text we need following elements:

1. Create a HTML file and name it index.html
1. A HTML boilingplat which you can add by adding a ! and tab
1. An input tag to recieve the text (input) with an id attributes to identify it
1. A p tag to show the result (output) with an id attributes to identify it

###  Sample HTML Code 
Paste the above code into your newly created HTML file body:

```html
    <h1>Text Length Calculator</h1>
    <div class="flex-container">
      <div><p>Please insert you text below:</p></div>
      <div><input id="text-input"/></div>
      <div> <button id="calculate-btn">Calculate Length</button></div>
      <div><p id="str-lenght"></p></div>  
    </div>
```

##  Setup JS File
Create a text-length-cal.js file


## JS Code
We start with a JS function to calculate the length of the input text:

```javascript


const strLengthCal = (str) => {
            return text.length;
    };

```
> Explanation
> - strLengthCal: function's name
> - str: is the parameter in this case string
> - return: output of the function in this case the length of our text


In order to provide this piece of coode with input element and output paragraph we need to get them by their unique id which we have named in HTML file.

```javascript
    const textInput =     const textInput = document.getElementById("that allows you to select an HTML element based on its id attribute");
    const outputP = document.getElementById("str-lenght");("text-input");
    const outputP = document.getElementById("str-lenght");
```
> Explanation
> - textInput/outputP: a variable to stores the data of our input/output
> - Document.getElementById: a method that allows you to select an HTML element based on its id attribute.
> - text-input: id of our input in hhtml
> - str-lenght: our output's id in html
Now that we have our data and a function to get the length of our text, we need a function to update the output to update the text length.

```javascript 
  const updateOutput = () => {
        const strLength = strLengthCal(textInput.value);
        outputP.textContent = `Length: ${strLength}`; 
    };
```

> Explanation
> - updateOutput: our output function name
> - strLength: a variable to store our output value of the length calculator function after passing our input value entered by user
> - textContent: is a property that sets or returns the text content of the specified node, and all its descendants.


Lastly, we need to add an event listener to our button to actually run our code and generate the output and print it.

```javascript
document.getElementById("calculate-btn").addEventListener("click", updateOutput);
```
>  Explanation
> - calculate-btn: id of our button in hhtml
> - addEventListener: is a method that attaches an event handler to a specified element, allowing the execution of a function when a particular event occurs, such as a click.

## Final JS Code
```javascript
document.addEventListener("DOMContentLoaded", function() {
    const strLengthCal = (str) => {
            return str.length;
    };

    const textInput = document.getElementById("text-input");
    const outputP = document.getElementById("str-lenght");

    const updateOutput = () => {
        const strLength = strLengthCal(textInput.value);
        outputP.textContent = `Length: ${strLength}`; 
    };

    document.getElementById("calculate-btn").addEventListener("click", updateOutput);
});
```