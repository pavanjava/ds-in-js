class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {

    constructor() {
        this.head = new Node('head');
    }

    find = (element) => {
        let current = this.head;
        while(current.element !== element ){
            current = current.next;
        }
        return current;
    }

    findLast = () => {
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }

    insert = (element, parentElement) => {
        const currentNode = this.find(parentElement);
        const newNode = new Node(element);
        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next = newNode;
    }

    display = () => {
        let current = this.head;
        while (current){
            console.log(current.element);
            current = current.next;
        }
    }

    displayReverse = () => {
        let current = this.findLast();
        while (current.previous){
            console.log(current.element);
            current = current.previous;
        }
    }
}

const dll = new DoubleLinkedList();
dll.insert(10, 'head');
dll.insert(20, 10);
dll.insert(30, 20);
dll.insert(5, 10);
dll.display();
