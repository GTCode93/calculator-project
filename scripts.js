/* FINAL OBJECTIVES
Top down is the most important things you should work on for the final parts of this project!

    * Add a backspace button (that also works with the keyboard) where if you press it, it deletes the most previous number input.

    * Add a period button to make it so you can work with floating numbers. Remember that in an input they can only be a single input of a period in the number input, no more.

    * Take the giant blocks of code and convert them into your own custom functions! These shits are LOOOOOOONG, make it readable.

    * Make it so the user can press buttons on the keyboard to input numbers/operations!
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
let operand1; let operation; let operand2; let solution;
let preOperand1 = ""; let preOperand2 = "";

digitButtons.forEach(button => button.addEventListener("click", () => {
    if(operand1 === undefined || isNaN(operand1)) {
        preOperand1 += button.textContent;
        outputText.textContent += button.textContent;
    } else if ((operand1 || operand1 === 0) && operation === undefined) {
        operand1 = undefined;
        outputText.textContent = "";
        preOperand1 += button.textContent;
        outputText.textContent += button.textContent;
    } else if ((operand2 === undefined || isNaN(operand2)) && operation && (operand1 || operand1 === 0)) {
        preOperand2 += button.textContent;
        outputText.textContent += button.textContent;
    }
}));

operationButtons.forEach(button => button.addEventListener("click", () => {
    switch(button.textContent) {
        case "+":
        case "-":
        case "*":
        case "/":
            if(!operation && (preOperand1 || preOperand1 === 0)) {
                operation = button.textContent;
                outputText.textContent += " " + button.textContent + " ";
                operand1 = preOperand1;
            } else if (operand1 && !preOperand1 && !operation) {
                preOperand1 = operand1;
                operation = button.textContent;
                outputText.textContent += " " + button.textContent + " ";
            } break;
        case "<<":
            if(preOperand1 && !operation && !operand1) {
                preOperand1 = preOperand1.slice(0, -1);
                outputText.textContent = outputText.textContent.slice(0 ,-1);
            } else if (preOperand2 && operation) {
                preOperand2 = preOperand2.slice(0, -1);
                outputText.textContent = outputText.textContent.slice(0 ,-1);
            } else if (operand1 && !preOperand2 && operation) {
                operation = undefined;
                outputText.textContent = outputText.textContent.slice(0 ,-2);
            } else if (operand1 && preOperand1) {
                operand1 = undefined;
                preOperand1 = preOperand1.slice(0, -1);
                outputText.textContent = outputText.textContent.slice(0, -2);
            }
    }
}));

finalButtons.forEach(button => button.addEventListener("click", () => {
    switch (button.textContent) {
        case "=":
            operand2 = preOperand2;
            operand1 = Number(operand1); 
            operand2 = Number(operand2);
            if((operand1 || operand1 === 0) && operation && (operand2 || operand2 === 0)) {
                solution = operate(operand1, operation, operand2);
                if(solution === Infinity || solution === NaN) {
                    outputText.textContent = "ERROR!";
                    break;
                } else if (!Number.isInteger(solution) && solution.toString().length > 13) {
                    numString = solution.toString(); 
                    /* Make this whole process a function later */
                    numLength = numString.length;
                    do {
                        numString = numString.slice(0, -1);
                        numLength--;
                    } while (numLength > 13);
                    solution = Number(numString);
                    /* Verify this. Does this even round up? It just deletes the last characters and it could be faulty because of that. */
                }
                operand1 = solution.toString();
                operand2 = undefined; 
                operation = undefined;
                preOperand1 = ""; preOperand2 = "";
                outputText.textContent = solution;
                solution = undefined;
            }
            break;
        case "CLEAR":
            preOperand1 = ""; preOperand2 = "";
            operand1 = undefined;
            operation = undefined; 
            operand2 = undefined;
            outputText.textContent = "";
            break;
    }
}));