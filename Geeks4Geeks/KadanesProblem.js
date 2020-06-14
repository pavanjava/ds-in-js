class KadanesProblem {

    constructor() {
        this.array = [-1,-2,-3,-4];
        this.maxSum = 0;
        this.tempSum = 0;
    }

    run = () => {
        for (let i = 0; i < this.array.length; i++) {
            this.tempSum += this.array[i];
            if (this.tempSum > this.maxSum)
                this.maxSum = this.tempSum;
            if (this.tempSum < 0)
                this.tempSum = 0;

        }
        return this.maxSum;
    }
}

const kp = new KadanesProblem();
console.log(kp.run());
