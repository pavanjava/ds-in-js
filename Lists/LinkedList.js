class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node("head");
    }

    display = () => {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }

    find = (element) => {
        let currentNode = this.head;
        while (currentNode.element !== element) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert = (element) => {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        const newNode = new Node(element);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    insertAt = (element, parentElement) => {
        const parentNode = this.find(parentElement);
        const newNode = new Node(element);
        newNode.next = parentNode.next;
        parentNode.next = newNode;
    }

    remove = (element) => {
        let currentNode = this.head;
        while(currentNode.next && currentNode.next.element != element){
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
    }
}

const ll = new LinkedList();
ll.insert(10);
ll.display();
ll.insertAt(20, 'head');
ll.display();
console.log(ll.find(20));
ll.remove(20);
ll.display();
