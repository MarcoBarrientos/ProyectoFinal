let currentExpression = '';
const inputDisplay = document.getElementById('input-display');
const historyList = document.getElementById('history-list');

function appendNumber(number) {
    currentExpression += number;
    inputDisplay.value = currentExpression;
}

function appendOperator(operator) {
    if (currentExpression !== '') {
        currentExpression += operator;
        inputDisplay.value = currentExpression;
    }
}

function calculate() {
    if (currentExpression !== '') {
        const result = eval(currentExpression);
        inputDisplay.value = result;
        addToHistory(currentExpression + ' = ' + result);
        currentExpression = '';
    }
}

function addToHistory(expression) {
    const listItem = document.createElement('li');
    listItem.textContent = expression;
    historyList.appendChild(listItem);
}

function clearDisplay() {
    currentExpression = '';
    inputDisplay.value = '';
}