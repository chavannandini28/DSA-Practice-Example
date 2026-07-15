function insertionSort(salaries) {
    let n = salaries.length;

    for (let i = 1; i < n; i++) {
        let key = salaries[i];
        let j = i - 1;

        while (j >= 0 && salaries[j] > key) {
            salaries[j + 1] = salaries[j];
            j--;
        }

        salaries[j + 1] = key;
    }

    return salaries;
}
const salaries = [45000, 30000, 60000, 25000, 50000];

const sortedSalaries = insertionSort(salaries);

console.log("Sorted Salaries :", sortedSalaries);

console.log("\nTime Complexity: O(n²)");
console.log("Space Complexity: O(1)");