class List {

    constructor() {
        this.listSize = 0;
        this.storage = [];
    }

    put = (element) => {
        this.storage[this.listSize++] = element;
    }

    get = (index) => {
        return this.storage[index];
    }

    find = (element) => {
        for (let i = 0; i < this.storage.length; ++i) {
            if (this.storage[i] == element) {
                return i;
            }
        }
        return -1;
    }

    remove = (element) => {
        const foundAt = this.find(element);
        if(foundAt > -1){
            this.storage.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    }

    removeAll = () => {
        delete this.storage;
        this.storage = [];
        this.listSize = 0;
        return true;
    }

    size = () => {
        return this.listSize;
    }

    toString = () => {
        return this.storage.toString();
    }
}

const list = new List();
list.put(1);
list.put(10);
list.put(12);
list.put(34);

console.log(list.toString());

console.log(list.find(12));

console.log(list.remove(12));

console.log(list.toString());

console.log(list.get(2));

console.log(list.size());

list.removeAll();

console.log(list.toString());
