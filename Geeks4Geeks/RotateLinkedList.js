class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class RotateLinkedList {
    constructor() {
        this.prevData = 0;
        this.nextData = 0;
        this.head = new Node('head');
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

    rotate = () => {
        let current = this.head;
        this.prevData = current.element;
        while(current.next){
            this.nextData = current.next.element;
            current.next.element = this.prevData;
            this.prevData = this.nextData;
            current = current.next;
        }
        this.head.element = this.prevData;
    }
}

const ll = new RotateLinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.insert(60);
ll.insert(70);
ll.insert(80);
ll.display();
ll.rotate();
ll.display();
