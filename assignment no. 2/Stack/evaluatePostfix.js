function evaluatePostfix(expression) {
    const stack = [];

    for (let char of expression) {
    
        if (!isNaN(char)) {
            stack.push(Number(char));
        } else {
    
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            switch (char) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.floor(operand1 / operand2));
                    break;
            }
        }
    }

    return stack.pop();
}


const expression = "23*54*+";


console.log("Postfix Expression:", expression);
console.log("Result:", evaluatePostfix(expression));