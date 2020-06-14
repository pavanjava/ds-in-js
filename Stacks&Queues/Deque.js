class Deque {

    constructor() {
        this.top = 0;
        this.storage = [];
    }

    addFirst = (element) =>{
        this.storage[this.top++] = element;
    }

    addLast = (element) => {
        const tempStorage = [];
        for(let i=0;i<this.storage.length;i++) {
            tempStorage[i] = this.storage[i];
        }
        delete this.storage;
        this.storage = [];
        this.storage.push(element);
        this.storage = this.storage.concat(tempStorage);
        this.top = this.storage.length;
    }

    toString = () => {
        return this.storage.toString();
    }
}

const dq = new Deque();
// dq.addFirst(1);
dq.addLast(2);
dq.addFirst(3);
// dq.addLast(4);

console.log(dq.toString());

