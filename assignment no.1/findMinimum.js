function findMinimum(numbers) {
    let min = numbers[0];

    for (let i =1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

const numbers = [45, 12, 78, 3, 90, 25];

const minimum = findMinimum(numbers);

console.log("Array :", numbers);
console.log("Minimum :", minimum);

console.log("\nTime Complexity: O(n)");
console.log("Space Complexity: O(1)");