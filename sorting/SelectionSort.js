class SelectionSort {

    constructor(data) {
        this.data = data;
    }

    sort = () => {

        for(let i=0;i<this.data.length;i++){
            let minIndex = i;
            for(let j=i+1;j<this.data.length;j++){
                if(this.data[j] < this.data[minIndex]){
                    minIndex = j;
                }
            }
            let temp = this.data[i];
            this.data[i] = this.data[minIndex];
            this.data[minIndex] = temp;
        }
    }
}

const data = [39, 3, 13, 8, 21, 1];
const b = new SelectionSort(data);
b.sort();
console.log(b.data);
