class Queue {
    constructor() {
        this.store = [];
    }

    add = (element) => {
        this.store.push(element)
    }

    pop = () => {
        return this.store.shift();
    }

    toString = () =>{
        return this.store.toString();
    }

    size = () => {
        return this.store.length;
    }
}

const q = new Queue();
q.add(1);
q.add(10);
q.add(21);
q.add(13);

console.log(q.toString());

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

console.log(q.size());
