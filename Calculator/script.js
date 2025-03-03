// script.js
let currentOperation = null;
let result = null;

function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter both numbers.');
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            currentOperation = 'Addition';
            break;
        case 'subtract':
            result = num1 - num2;
            currentOperation = 'Subtraction';
            break;
        case 'multiply':
            result = num1 * num2;
            currentOperation = 'Multiplication';
            break;
        case 'divide':
            if (num2 === 0) {
                alert('Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            currentOperation = 'Division';
            break;
    }
    document.getElementById('result').textContent = `${currentOperation} result: ${result}`;
}

function clearFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = 'result';
    currentOperation = null;
    result = null;
}

function showResult() {
    if (result !== null && currentOperation !== null) {
        document.getElementById('result').textContent = `${currentOperation} result: ${result}`;
    } else {
        alert('Please perform an operation first.');
    }
}
