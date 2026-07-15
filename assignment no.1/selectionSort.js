function selectionSort(studentMarks) {
    let n = studentMarks.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (studentMarks[j] < studentMarks[minIndex]) {
                minIndex = j;
            }
        }

        let temp = studentMarks[i];
        studentMarks[i] = studentMarks[minIndex];
        studentMarks[minIndex] = temp;
    }

    return studentMarks;
}

const studentMarks = [80, 65, 90, 72, 88];
const sortedMarks = selectionSort(studentMarks);

console.log("Sorted Marks :", sortedMarks);
console.log("\nTime Complexity: O(n²)");
console.log("Space Complexity: O(1)");