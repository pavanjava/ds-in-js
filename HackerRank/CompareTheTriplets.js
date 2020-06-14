class CompareTheTriplets {

    constructor() {
        this.alice = [17, 28, 30];
        this.bob = [99, 16, 8];
        this.result = [];
    }

    compute = () => {

        let alicePoints = 0;
        let bobPoints = 0;

        if (this.alice.length !== this.bob.length) {
            return -1;
        }
        for (let i = 0; i < this.alice.length; i++) {
            if (this.alice[i] > this.bob[i]) {
                ++alicePoints;
            } else if(this.alice[i] < this.bob[i]) {
                ++bobPoints;
            }else{
                continue;
            }
        }
        this.result.push(alicePoints);
        this.result.push(bobPoints);
        return this.result.toString();
    }
}

let a = new CompareTheTriplets();
console.log(a.compute());
