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
    } else {
        handlePoint(target);
    }
});

function handleDigit(target) {
    if(operator === '') {
        firstOperand += target.textContent;
        displayUp.textContent += target.textContent;
        displayDown.textContent += target.textContent;
    }
    else {
        secondOperand += target.textContent;
        displayUp.textContent += target.textContent;
        displayDown.textContent = target.textContent;
    }
}

function handleOperator(target) {
    let newOperator = target.textContent;

    if(newOperator === '=') {
        switch(operator) {
            case '+': {
                result = Number(firstOperand) + Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                break;
            }
            case '-': {
                result = Number(firstOperand) - Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                break;
            }
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
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
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '+';
                operator = newOperator;
                break;
            case '*':
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
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '-';
                operator = newOperator;
                break;
            case '*':
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
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
            case '*':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '*';
                operator = newOperator;
                break;
        }
    }   else if(newOperator === '/') {
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
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
            case '*':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '/';
                operator = newOperator;
                break;
        }
    }
}