class Dictionary {
    constructor() {
        this.storage = [];
    }

    put = (key, value) => {
        this.storage[key] = value;
    }

    get = (key) => {
        return this.storage[key];
    }

    getAll = () => {
        Object.keys(this.storage).forEach(key => {
            console.log(key + '->' + this.storage[key]);
        });
    }

    remove = (key) => {
        delete this.storage[key];
    }
}

const dict = new Dictionary();
dict.put(1,'java');
dict.put(2,'JavaScript');
dict.put(3,'react');
dict.put(4,'python');
dict.put(5,'kubernetes');
dict.put(6,'docker');
console.log(dict.get(4));
dict.getAll();
dict.remove(4);
dict.getAll();

