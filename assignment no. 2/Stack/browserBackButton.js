class Browser {
    constructor() {
        this.history = [];
    }

    visit(page) {
        this.history.push(page);
        console.log("Visited:", page);
    }

    back() {
        if (this.history.length > 1) {
            this.history.pop();
            console.log("Current Page:", this.history[this.history.length - 1]);
        } else {
            console.log("No previous page.");
        }
    }

    display() {
        console.log("History:", this.history);
    }
}

const browser = new Browser();

browser.visit("google.com");
browser.visit("github.com");
browser.visit("youtube.com");

browser.display();

browser.back();
browser.back();

browser.display();