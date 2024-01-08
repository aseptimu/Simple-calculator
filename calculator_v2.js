let result = 0;
let input = '0';
let operation;

const display = document.getElementById('display')

function processClick(button) {
    if (isNaN(button)){
        processSymbol(button)
    } else {
        processNumber(button);
    }
    display.innerText = input;
}

function processSymbol(symbol) {
    switch (symbol) {
        case 'C':
            input = '0';
            result = 0;
            break;
        case '←':
            if (input === '0') {
                return;
            } else {
                input = input.substring(0, input.length - 1);
                if (input.length === 0) {
                    input = '0';
                }
                break;
            }
        case '=':
            if (operation === null) {
                return ;
            }
            calculate(parseInt(input));
            operation = null;
            input = result;
            result = 0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            processOperation(symbol);
            break;
    }
}

function processOperation(symbol) {
    if (input === '0') {
        return ;
    }
    const num = parseInt(input);
    if (result === 0) {
        result = num;
    } else {
        calculate(num);
    }
    operation = symbol;
    input = '0';
}

function calculate(num) {
    if (operation === '+') {
        result += num;
    } else if (operation === '−') {
        result -= num;
    } else if (operation === '×') {
        result *= num;
    } else if (operation === '÷') {
        result /= num;
    }
}

function processNumber(number) {
    if (input === '0') {
        input = number;
    } else {
        input += number;
    }
}

function init() {
    document.getElementById('calculator').addEventListener('click', function(event){
        processClick(event.target.innerText);
    })
}

init();
