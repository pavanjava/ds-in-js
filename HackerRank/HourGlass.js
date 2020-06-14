class HourGlass {

    constructor() {
        this.data = [[1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]]
    }

    computeHourglass = () => {
        let max = 0
        let sum = 0;
        for (let i = 0; i < this.data.length - 2; i++) {
            for (let j = 0; j < this.data[i].length - 2; j++) {
                sum = this.data[i][j] + this.data[i][j + 1] + this.data[i][j + 2] +
                this.data[i + 1][j + 1] + this.data[i + 2][j] + this.data[i + 2][j + 1] + this.data[i + 2][j + 2];
            }
            if(max < sum){
                max = sum;
            }
        }
        console.log(max);
    }
}

const hg = new HourGlass();
hg.computeHourglass();
