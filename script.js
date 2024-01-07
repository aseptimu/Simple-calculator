const buttons = document.querySelectorAll('input[type=button]');
const first_operand = document.querySelector('.first-result');
const second_operand = document.querySelector('.second-result');

let first = 0;
let isOperation = false;
let operator = '';

buttons.forEach(element => {
    element.addEventListener('click', () => {
        if (first_operand.value === '0' || isNaN(first_operand.value) || !isFinite(first_operand.value)) {
            first_operand.value = '';
        }
        if (element.id ==='reset') {
            first_operand.value = '0';
            first = 0;
            second_operand.value='';
        } else if (element.id === 'backspace' && first_operand.value !== '0') {
            first_operand.value = first_operand.value.slice(0, -1);
            if (first_operand.value.length === 0) {
                first_operand.value = '0';
            }
        } else if (element.id === 'plus') {
            operate('+', first_operand.value, element.id);
        } else if (element.id === 'minus') {
            operate('-', first_operand.value, element.id);
        } else if (element.id === 'divide') {
            operate('/', first_operand.value, element.id);
        } else if (element.id === 'multiply') {
            operate('*', first_operand.value, element.id);
        }
        
        
        else if (element.id === 'equals') {
            first_operand.value =  calculate(first, first_operand.value, operator);
            first = 0;
            isOperation = false;
            second_operand.value ='';
        }
        else {
            first_operand.value += element.value
        }
    })
});

let operate = function(sign, inputValue, operation) {
    if (isOperation) {
        first = calculate(first, inputValue, operator)
    } else {
        first = calculate(inputValue);
        isOperation = true;
    }
    second_operand.value = first + ' ' + sign;
    first_operand.value = '';
    operator = operation;
}

let calculate = function(first, second, operator) {
    switch (operator) {
        case 'plus':
            return Number(first) + Number(second);
        case 'minus':
            return Number(first) - Number(second);
        case 'divide':
            return Number(first) / Number(second);
        case 'multiply':
            return Number(first) * Number(second);
        default:
            return Number(first);
    }
}
