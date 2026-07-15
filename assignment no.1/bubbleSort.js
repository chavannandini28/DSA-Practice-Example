function bubbleSort(numbers) {
    let n = numbers.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return numbers;
}

const numbers = [8, 4, 6, 2, 9, 1];

const sortedArray = bubbleSort(numbers);

console.log("Sorted Array :", sortedArray);

console.log("\nTime Complexity:");
console.log("Best Case: O(n)");
console.log("Average Case: O(n²)");
console.log("Worst Case: O(n²)");

console.log("\nSpace Complexity: O(1)");