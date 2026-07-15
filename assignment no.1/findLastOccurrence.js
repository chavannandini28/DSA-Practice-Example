function findLastOccurrence(values, target) {
    let left = 0;
    let right = values.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (values[mid] === target) {
            result = mid;
            left = mid + 1; // Search on the right side
        } else if (values[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

const values = [1, 2, 2, 2, 3, 4, 5];
const target = 3;

const lastOccurrence = findLastOccurrence(values, target);

console.log("Array :", values);
console.log("Target :", target);
console.log("Last Occurrence :", lastOccurrence);

console.log("\nTime Complexity: O(log n)");
console.log("Space Complexity: O(1)");