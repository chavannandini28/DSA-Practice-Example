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

    search(value) {
        let current = this.head;

        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }
}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);

console.log("Search 20:", list.search(20));
console.log("Search 50:", list.search(50));