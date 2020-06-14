class InsertionSort {

    constructor(data) {
        this.data = data;
    }

    sort = () => {

        for (let i = 1; i < this.data.length; i++) {
            let key = this.data[i];
            let j = i;
            while (j > 0 && this.data[j - 1] > key) {
                this.data[j] = this.data[j - 1];
                j--;
            }
            this.data[j] = key;
        }
    }
}

const data = [39, 3, 13, 8, 21, 1];
const b = new InsertionSort(data);
b.sort();
console.log(b.data);
