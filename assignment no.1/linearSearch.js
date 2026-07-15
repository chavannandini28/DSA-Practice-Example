function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [12, 45, 67, 23, 89];
const target = 67;

const index = linearSearch(arr, target);

console.log("Array :", arr);
console.log("Target :", target);
console.log("Index :", index);

console.log("\nTime Complexity: O(n)");
console.log("Space Complexity: O(1)");