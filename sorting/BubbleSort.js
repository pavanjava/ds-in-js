class BubbleSort {

    constructor(data) {
        this.data = data;
    }

    sort = () => {
        for (let i = 0; i < this.data.length; i++) { // number of rounds
            for (let j = 0; j < this.data.length - 1; j++) { // number of compares
                if (this.data[j] > this.data[j + 1]) {
                    let temp = this.data[j + 1];
                    this.data[j + 1] = this.data[j];
                    this.data[j] = temp;
                }
            }
        }
    }
}

const data = [39, 3, 13, 8, 21, 1];
const b = new BubbleSort(data);
b.sort();
console.log(b.data);
