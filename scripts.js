/* Technical things first, Presentation last */
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
let preOperand1 = ""; let preOperand2 = "";

digitButtons.forEach(button => button.addEventListener("click", () => {
    if(operand1 === undefined) {
        preOperand1 += button.textContent;
        console.log(operand1); /* not valid */
    } else if ((operand2 === undefined) && operation && (operand1 || operand1 === 0)) {
        preOperand2 += button.textContent;
        console.log(operand2);
    }

    /* This section works, but only with single digit operands.
        * To make it so operand1 can be multiple numbers, keep assigning operand1 numbers (probs as a string) until an operation is chosen
        * To make it so operand2 can be multiple numbers, keep assigning operand2 numbers until the equal sign is chosen.
    */

    /* 
    Add part here where it add the text to the output section 
    */
}));
operationButtons.forEach(button => button.addEventListener("click", () => {
    if(!operation) {
        operation = button.textContent;
        if (!operand1) {
            operand1 = preOperand1;  
        }
        console.log(operation);
    }
    /* It's good to note that the operation symbols all come out as true */
    /* Add part here where it adds the text to the output section */
}));

finalButtons.forEach(button => button.addEventListener("click", () => {
    switch (button.textContent) {
        case "=":
            operand2 = preOperand2;
            if((operand1 || operand1 === 0) && operation && (operand2 || operand2 === 0)) {
                solution = operate(operand1, operation, operand2);
                console.log(solution);
                operand1 = solution; 
                operand2 = undefined; operation = undefined;
                preOperand1 = ""; preOperand2 = "";
            }
            /* Code that displays it to the outcome-text section */

            break;
        case "CLEAR":
            operand1 = undefined;
            operation = undefined;
            operand2 = undefined;
            /* Code that clears out the text to the output section, maybe just leave it as a space w/ " "? */
            break;
    }
}));