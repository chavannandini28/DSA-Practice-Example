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

    insert(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    deleteLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;

        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
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

list.insert(10);
list.insert(20);
list.insert(30);

console.log("Before:");
list.display();

list.deleteLast();

console.log("After:");
list.display();