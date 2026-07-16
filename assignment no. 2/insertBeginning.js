class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    display() {
        let current = this.head;

        while (current) {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        }

        console.log("null");
    }
}

const list = new LinkedList();

list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);

console.log("Linked List:");
list.display();