function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const quickNumbers = [10, 7, 8, 9, 1, 5];

const sortedArray = quickSort(quickNumbers);

console.log("Sorted Array :", sortedArray);

console.log("\nAverage Time Complexity: O(n log n)");
console.log("Worst Time Complexity: O(n²)");
console.log("Space Complexity: O(n)");