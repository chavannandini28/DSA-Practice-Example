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

    display() {
        let current = this.head;

        while(current !== null) {
            process.stdout.write(current.data + " -> ");
            current = current.next;

        }
        console.log("null");

    }
}

const list = new LinkedList();

list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);

console.log("Linked List:");
list.display();