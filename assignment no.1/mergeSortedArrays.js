function mergeSortedArrays(firstArray, secondArray) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] < secondArray[j]) {
            merged.push(firstArray[i]);
            i++;
        } else {
            merged.push(secondArray[j]);
            j++;
        }
    }

    while (i < firstArray.length) {
        merged.push(firstArray[i]);
        i++;
    }

    while (j < secondArray.length) {
        merged.push(secondArray[j]);
        j++;
    }

    return merged;
}

const firstArray = [1, 3, 5, 7];
const secondArray = [2, 4, 6, 8];

const mergedArray = mergeSortedArrays(firstArray, secondArray);

console.log("Merged Array :", mergedArray);

console.log("\nTime Complexity: O(n + m)");
console.log("Space Complexity: O(n + m)");
