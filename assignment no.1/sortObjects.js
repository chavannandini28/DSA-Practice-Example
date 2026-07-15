const students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 65 },
    { name: "C", marks: 90 }
];

students.sort((student1, student2) => {
    return student1.marks - student2.marks;
});

console.log("Sorted Students:");
console.log(students);

console.log("\nTime Complexity: O(n log n)");
console.log("Space Complexity: O(1)");