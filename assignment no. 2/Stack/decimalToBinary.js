function decimalToBinary(number) {
    const stack = [];

    while (number > 0) {
        stack.push(number % 2);
        number = Math.floor(number / 2);
    }

    let binary = "";

    while (stack.length > 0) {
        binary += stack.pop();
    }

    return binary;
}

const decimal = 25;

console.log("Decimal:", decimal);
console.log("Binary:", decimalToBinary(decimal));