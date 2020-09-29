const calc = document.querySelector('.calculator-keys')
const output = document.querySelector('.calculator-screen')
let input = '';
let operator = '';
let operand1 = '';
let operand2 = '';
let dot = false;
//one EventListener for all keys. // Identifies Keys by a combination of className and Value 
calc.addEventListener('click', e => {
    //NUMBERS // only allows one 0 the at first Index // applies to operand1 before the OPERATOR and to operand2 after 
    if (e.target.className == '') {
        if (input == '0' || input == '-0') {} else if (operator == '') {
            input += e.target.value;
            output.value = input;
            operand1 = input
        } else {
            input += e.target.value;
            output.value += e.target.value;
            operand2 = input
        }
    }
    //DCIMAL // allowed only if there is any input // decimal is only allowed once per num sets 'dot' bool to 'true' once entered // OPERATOR or EQUAL resets 'dot' bool to 'false again
    if (e.target.className == 'decimal') {
        if (input == '' || input == '-') {} else if (dot) {} else {
            input += e.target.value
            output.value += e.target.value
            dot = true
        }
    }
    //OPERATOR //  allows one operator per calculation // allows if first num has been inserted or if minus is added infront of num // changes OPERATOR if User chooses to
    if (e.target.className == 'operator') {
       // console.log(input, !input, !e.target.value == '-')
        if (!output.value) {
            if (!input && e.target.value == '-') {
                dot = false;
                input = e.target.value
                output.value = e.target.value
            } else if (!input && e.target.value != '-') {}
        } else {
            if (output.value == '-') {} else if (!operator) {
                dot = false
                input = ''
                operator = e.target.value
                output.value += e.target.value
            } else if (!operand2) {
                dot = false
                input = ''
                operator = e.target.value
                let temp = output.value.slice(0, output.value.length - 1)
                output.value = temp + e.target.value + '';
            }
        }
    }
    //EQUAL // allowed only if there was any input // calls the calculation // resets some vars 
    if (e.target.className == 'equal-sign operator' && input) {
        dot = false
        input = ''
        calculate()
        operand1 = output.value
        operand2 = '';
        operator = '';
    }
    //CLEAR // resets vars
    if (e.target.className == 'all-clear') {
        input = '';
        operator = '';
        operand1 = '';
        operand2 = '';
        output.value = '';
        dot = false
    }
})

function calculate() {
    console.log(operand1, operator, operand2)
    if (operator == '+') {
        output.value = sum(operand1, operand2)
    } else if (operator == '-') {
        output.value = minus(operand1, operand2)
    } else if (operator == '*') {
        output.value = multi(operand1, operand2)
    } else if (operator == '/') {
        output.value = devid(operand1, operand2)
    }
}
let sum = (operand1, operand2) => Number(operand1) + Number(operand2)
let multi = (operand1, operand2) => Number(operand1) * Number(operand2)
let devid = (operand1, operand2) => Number(operand1) / Number(operand2)
let minus = (operand1, operand2) => Number(operand1) - Number(operand2)