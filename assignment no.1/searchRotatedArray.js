function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        else {
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

const rotatedNumbers = [5, 6, 7, 8, 1, 2, 3];
const targetNumber = 2;

const targetIndex = searchRotatedArray(rotatedNumbers, targetNumber);

console.log("Target Index :", targetIndex);

console.log("\nTime Complexity: O(log n)");
console.log("Space Complexity: O(1)");