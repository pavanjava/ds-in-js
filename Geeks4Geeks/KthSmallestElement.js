class KthSmallestElement {

    constructor(elements, index) {
        this.storage = elements;
        this.KthSmallest = index;
    }

    smallest = () => {
        if(this.KthSmallest > this.storage.length){
            return -1;
        }else{
            this.storage.sort((a, b) => {
                return a - b
            });
            return this.storage[this.KthSmallest-1];
        }
    }
}

const a = new KthSmallestElement([7, 10, 4, 20, 15], 4);
console.log(a.smallest());
