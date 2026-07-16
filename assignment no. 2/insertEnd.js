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

    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
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

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

console.log("Linked List:");
list.display();