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
        operator = '';
        result = '';
        secondOperand = '';
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

    if(newOperator === '=' && secondOperand) {
        switch(operator) {
            case '+': 
                result = Number(firstOperand) + Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                secondOperand = '';
                break;
            case '-': 
                result = Number(firstOperand) - Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                secondOperand = '';
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                secondOperand = '';
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                secondOperand = '';
                break;
            case 'xn':
                result = Number(firstOperand) ** Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                displayUp.textContent += '=' + result;
                displayDown.textContent = result;
                operator = newOperator;
                firstOperand = '';
                secondOperand = '';
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
            case 'xn':
                result = Number(firstOperand) ** Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
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
            case 'xn':
                result = Number(firstOperand) ** Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
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
            case 'xn':
                result = Number(firstOperand) ** Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
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
            case 'xn':
                result = Number(firstOperand) ** Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
        }
    } else if(newOperator === '+/-') {
        let ok = 1;
        for(let i = displayUp.textContent.length - 1; i >= 1 && ok === 1; i--)
            if(isNaN(displayUp.textContent[i]))
                ok = 0;
        
        if(ok) {
            if(firstOperand > 0) {
                displayUp.textContent = '-' + displayUp.textContent;
                firstOperand = -firstOperand;
                displayDown.textContent = '-' + displayDown.textContent;
            } else if(firstOperand < 0) {
                displayUp.textContent = displayUp.textContent.slice(1);
                firstOperand = -firstOperand;
                displayDown.textContent = displayDown.textContent.slice(1);
            }
        }

        switch(operator) {
            case '=':
                if(!isNaN(displayUp.textContent[displayUp.textContent.length - 1])) {
                    if(result > 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '=')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + '-' + displayUp.textContent.slice(position);
                        result = -result;
                        displayDown.textContent = '-' + displayDown.textContent;
                    } else if(result < 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '=')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + displayUp.textContent.slice(position + 1);
                        result = -result;
                        displayDown.textContent = displayDown.textContent.slice(1);
                    }
                }
                break;
            case '+':
                if(!isNaN(displayUp.textContent[displayUp.textContent.length - 1])) {
                    if(secondOperand > 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '+')
                                position = i;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + '-' + displayUp.textContent.slice(position + 1);
                        operator = '-';
                    }
                }
                break;
            case '-':
                if(!isNaN(displayUp.textContent[displayUp.textContent.length - 1])) {
                    if(secondOperand > 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '-')
                                position = i;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + '+' + displayUp.textContent.slice(position + 1);
                        operator = '+';
                    }
                }
                break;
            case '/':
                if(!isNaN(displayUp.textContent[displayUp.textContent.length - 1]) || displayUp.textContent[displayUp.textContent.length - 1] === ')') {
                    if(secondOperand > 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '/')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + '(-' + displayUp.textContent.slice(position) + ')';
                        secondOperand = -secondOperand;
                        displayDown.textContent = '-' + displayDown.textContent;
                    } else if(secondOperand < 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '/')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + displayUp.textContent.slice(position + 2, -1);
                        secondOperand = -secondOperand;
                        displayDown.textContent = displayDown.textContent.slice(1);
                    }
                }
                break;
            case 'x':
                if(!isNaN(displayUp.textContent[displayUp.textContent.length - 1]) || displayUp.textContent[displayUp.textContent.length - 1] === ')') {
                    if(secondOperand > 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '*')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + '(-' + displayUp.textContent.slice(position) + ')';
                        secondOperand = -secondOperand;
                        displayDown.textContent = '-' + displayDown.textContent;
                    } else if(secondOperand < 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '*')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + displayUp.textContent.slice(position + 2, -1);
                        secondOperand = -secondOperand;
                        displayDown.textContent = displayDown.textContent.slice(1);
                    }
                }
                break;
            case 'xn':
                if(!isNaN(displayUp.textContent[displayUp.textContent.length - 1]) || displayUp.textContent[displayUp.textContent.length - 1] === ')') {
                    if(secondOperand > 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '^')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + '(-' + displayUp.textContent.slice(position) + ')';
                        secondOperand = -secondOperand;
                        displayDown.textContent = '-' + displayDown.textContent;
                    } else if(secondOperand < 0) {
                        let position = -1;
                        for(let i = displayUp.textContent.length - 1; i >= 0 && position === -1; i--)
                            if(displayUp.textContent[i] === '*')
                                position = i;
                        position++;
                        displayUp.textContent = displayUp.textContent.slice(0, position) + displayUp.textContent.slice(position + 2, -1);
                        secondOperand = -secondOperand;
                        displayDown.textContent = displayDown.textContent.slice(1);
                    }
                }
                break;
        }

    }  else if(newOperator === 'xn') {
        switch(operator) {
            case '':
                if(firstOperand && secondOperand === '') {
                    displayUp.textContent += '^';
                    operator = newOperator;
                }
                break;
            case '=':
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
            case '+':
                result = Number(firstOperand) + Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
            case '-':
                result = Number(firstOperand) - Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
            case '/':
                result = Number(firstOperand) / Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
            case 'x':
                result = Number(firstOperand) * Number(secondOperand);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
            case 'xn':
                result = Number(firstOperand) ** Number(secondOperand);
                result = roundToDecimalPlace(result, 3);
                firstOperand = result;
                secondOperand = '';
                displayUp.textContent = firstOperand + '^';
                operator = newOperator;
                break;
        }
    }
}

function clearButton() {
    let findOperator = 0;
    let findFirstOperand = 0;
    let findSecondOperand = 0;
    let findEqual = 0;
    let findResult = 0;
    for(let i = 0; i < displayUp.textContent.length; i++) {
        let char = displayUp.textContent[i];
        if(!isNaN(char))
            findFirstOperand = 1;
        if(['+', '-', 'x', '/', '^'].includes(char) && findFirstOperand)
            findOperator = char;
        if(!isNaN(char) && findOperator)
            findSecondOperand = 1;
        if(char === '=') {
            findEqual = 1;
        }
        if((!isNaN(char) || ['+', '-'].includes(char)) && findEqual) {
            findResult = 1;
        }
    }

    displayUp.textContent = displayUp.textContent.slice(0, -1);
    if(findResult) {
        result = result.toString().slice(0, -1);
        result = parseFloat(result);
        displayDown.textContent = displayDown.textContent.slice(0, -1);
    } else if(findEqual) {
        operator = findOperator;
    } else if(findSecondOperand) {
        secondOperand = secondOperand.slice(0, -1);
        displayDown.textContent = displayDown.textContent.slice(0, -1);
    } else if(findOperator) {
        operator = '';
    } else if(findFirstOperand) {
        firstOperand = firstOperand.slice(0, -1);
        displayDown.textContent = displayDown.textContent.slice(0, -1);
    }
}

function allClearButton() {
    result = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    displayDown.textContent = '';
    displayUp.textContent = '';
}

function roundToDecimalPlace(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
}