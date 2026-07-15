function kthSmallestElement(arr, k) {
    
    const sortedArray = [...arr];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return {
        sortedArray,
        kthSmallest: sortedArray[k - 1]
    };
}

const kthNumbers = [7, 10, 4, 3, 20, 15];
const k = 3;

const result = kthSmallestElement(kthNumbers, k);

console.log("Kth Smallest Element :", result.kthSmallest);
console.log("Sorted Array :", result.sortedArray);

console.log("\nTime Complexity: O(n log n)");
console.log("Space Complexity: O(1)");