/* FINAL OBJECTIVES
Top down is the most important things you should work on for the final parts of this project!

    * Display an error message when trying to divide by 0

    * Pressing the = button before entering all the values you need can create errors. Make the event listeners fool proof! The user must have the operand1, operation, and operand2 defined before equals does anything.

    * Round off the long answers. The input section can take up to 13 digits, so use that as your margin.

    * Make it so whenever solution = operand1 (aka the solution from the last operation becomes the next operation's operand1,) and the user inputs a new number, operand 1 is erased and preOperand1 starts being defined per usual.

    * Make it so the user can press buttons on the keyboard to input numbers/operations!

    * Add a backspace button (that also works with the keyboard) where if you press it, it deletes the most previous number input.

    * Add a period button to make it so you can work with floating numbers. Remember that in an input they can only be a single input of a period in the number input, no more.
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

const outputText = document.querySelector("#output-text");

let operand1; let operation; let operand2;
let preOperand1 = ""; let preOperand2 = "";

digitButtons.forEach(button => button.addEventListener("click", () => {
    if(operand1 === undefined) {
        preOperand1 += button.textContent;
        outputText.textContent += button.textContent;
    } else if ((operand2 === undefined) && operation && (operand1 || operand1 === 0)) {
        preOperand2 += button.textContent;
        outputText.textContent += button.textContent;
    }
}));
operationButtons.forEach(button => button.addEventListener("click", () => {
    /* add code here so if an operation button is chosen but preOperand1 is empty, "", nothing happens. */
    if(!operation) {

        operation = button.textContent;
        outputText.textContent += " " + button.textContent + " ";
        if (!operand1) {
            operand1 = preOperand1;  
        }
    }
}));

finalButtons.forEach(button => button.addEventListener("click", () => {
    switch (button.textContent) {
        case "=":
            operand2 = preOperand2;
            if((operand1 || operand1 === 0) && operation && (operand2 || operand2 === 0)) {
                solution = operate(parseInt(operand1), operation, parseInt(operand2));
                /* Add code here to round up the answer, for visual purposes mostly! 
                    * There can be a total of  13 digits inside the output section in total without it overflowing or looking crowded.
                */
                operand1 = solution; 
                operand2 = undefined; operation = undefined;
                preOperand1 = ""; preOperand2 = "";
            }
            outputText.textContent = solution;
            break;
        case "CLEAR":
            operand1 = undefined;
            operation = undefined;
            operand2 = undefined;
            outputText.textContent = "";
            break;
    }
}));