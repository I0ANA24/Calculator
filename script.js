let input = document.querySelector('.buttons');
let displayUp = document.querySelector('.screen-up');
let displayDown = document.querySelector('.screen-down');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

input.addEventListener('click', (event) => {
    const target = event.target;
    const classList = target.classList;

    if(classList.contains('digit')) {
        handleDigit(target);
    } else if(classList.contains('operator')) {
        handleOperator(target);
    } else if(classList.contains('point')) {
        handlePoint(target);
    } else if(classList.contains('clear')) {
        clearButton();
    } else if(classList.contains('all-clear')) {
        allClearButton();
    }
});

function handleDigit(target) {
    if(firstOperand === ''){
        displayUp.textContent = '';
        displayDown.textContent = '';
    }
    if(operator === '' || operator === '=') {
        firstOperand += target.textContent;
        displayUp.textContent += target.textContent;
        displayDown.textContent += target.textContent;
    } else {
        secondOperand += target.textContent;
        displayUp.textContent += target.textContent;
        displayDown.textContent = target.textContent;
    }
}

function handleOperator(target) {
    let newOperator = target.textContent;

    if(newOperator === '=') {
        switch(operator) {
            case '+': 
                result = Number(firstOperand) + Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                break;
            case '-': 
                result = Number(firstOperand) - Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                break;
        }
    } else if(newOperator === '+') {
        switch(operator) {
            case '':
                if(firstOperand && secondOperand === '') {
                    displayUp.textContent += '+';
                    operator = newOperator;
                }
                break;
            case '=':
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '+';
                operator = newOperator;
                break;
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '+';
                operator = newOperator;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '+';
                operator = newOperator;
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '+';
                operator = newOperator;
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '+';
                operator = newOperator;
                break;
        }
    } else if(newOperator === '-') {
        switch(operator) {
            case '':
                if(firstOperand && secondOperand === '') {
                    displayUp.textContent += '-';
                    operator = newOperator;
                }
                break;
            case '=':
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '-';
                operator = newOperator;
                break;
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '-';
                operator = newOperator;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '-';
                operator = newOperator;
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '-';
                operator = newOperator;
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '-';
                operator = newOperator;
                break;
        }
    }  else if(newOperator === 'x') {
        switch(operator) {
            case '':
                if(firstOperand && secondOperand === '') {
                    displayUp.textContent += '*';
                    operator = newOperator;
                }
                break;
            case '=':
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
        }
    } else if(newOperator === '/') {
        switch(operator) {
            case '':
                if(firstOperand && secondOperand === '') {
                    displayUp.textContent += '/';
                    operator = newOperator;
                }
                break;
            case '=':
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
        }
    }
}

function roundToDecimalPlace(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
}

function allClearButton() {
    result = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    displayDown.textContent = '';
    displayUp.textContent = '';
}