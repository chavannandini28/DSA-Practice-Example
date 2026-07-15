function findFirstOccurrence(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (numbers[mid] === target) {
            result = mid;
            right = mid - 1; 
        } else if (numbers[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

const numbers = [1, 2, 2, 2, 3, 4, 5];
const target = 1;

const firstOccurrence = findFirstOccurrence(numbers, target);

console.log("Array :", numbers);
console.log("Target :", target);
console.log("First Occurrence :", firstOccurrence);

console.log("\nTime Complexity: O(log n)");
console.log("Space Complexity: O(1)");