function isBalanced(expression) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of expression) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const expression = "({[]})";

console.log("Expression:", expression);
console.log("Output:", isBalanced(expression) ? "Valid" : "Invalid");