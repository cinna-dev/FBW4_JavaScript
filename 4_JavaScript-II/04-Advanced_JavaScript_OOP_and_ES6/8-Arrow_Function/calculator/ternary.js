const calculate = (operand1, operator, operand2) => {
    return (operator === 'add' ? parseFloat(operand1) + parseFloat(operand2) : operator === 'substract' ? parseFloat(operand1) - parseFloat(operand2) : operator === 'multiply' ? parseFloat(operand1) * parseFloat(operand2) : operator === 'divide' ? parseFloat(operand1) / parseFloat(operand2) : 'no valid operator')
}
console.log(calculate(100,'add', 10))