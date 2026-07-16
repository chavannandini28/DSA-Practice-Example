class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Stack is Empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return "Stack is Empty";
        }
        return this.items[this.items.length - 1];
    }

    display() {
        console.log("Stack:", this.items);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();

console.log("Top Element:", stack.peek());

console.log("Popped:", stack.pop());

stack.display();