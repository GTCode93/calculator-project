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