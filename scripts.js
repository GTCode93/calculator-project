/* 
OBJECTIVES:
* How do I assign the 3 variables using the buttons?
Create event listeners for the digit buttons and the operation buttons. When you click on each button, they should return a value to operand1, then operation, then lastly operand2.
    * When the user presses 3 buttons, the operand1, operation, and operand2, how do you make it so those 3 variables are assigned in that order?
    * Possible Solution: create a temporary variable named "character" and use that to assign the variables instead.
*/
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operand1, operation, operand2) {
    parseInt(operand1); parseInt(operand2);
    switch (operation) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
    }
}

const digitButtons = document.querySelectorAll(".digit-button");
const operationButtons = document.querySelectorAll(".operation-button");
const finalButtons = document.querySelectorAll(".final-button");

let operand1; let operation; let operand2;

digitButtons.forEach(button => button.addEventListener("click", () => {
    if(operand1 === undefined) {
        operand1 = button.textContent;
        console.log(operand1);
    } else if (operand2 === undefined) {
        operand2 = button.textContent;
        console.log(operand2);
    }
    /* This section works, but only with single digit operands.
        * To make it so operand1 can be multiple numbers, keep assigning operand1 numbers (probs as a string) until an operation is chosen
        * To make it so operand2 can be multiple numbers, keep assigning operand2 numbers until the equal sign is chosen.
    */
    /* Add part here where it add the text to the output section */
}));
operationButtons.forEach(button => button.addEventListener("click", () => {
    if(!operation) {
        operation = button.textContent;
        console.log(operation);
    }
    /* It's good to note that the operation symbols all come out as true */
    /* Add part here where it adds the text to the output section */
}));

finalButtons.forEach(button => button.addEventListener("click", () => {
    switch (button.textContent) {
        case "=":
            finalValue = operate(operand1, operation, operand2);
            console.log(finalValue);
            /* Code that displays it to the outcome-text section */
            /* Code that makes it so this value then also be used in the next operation if the user decided to add another operation. Apply finalValue to operand1? */
            break;
        case "CLEAR":
            operand1 === undefined;
            operation === undefined;
            operand2 === undefined;
            /* Code that clears out the test to the output section, maybe just leave it as a space w/ " "? */
            break;
    }
}));