class TrapRainWater {
    constructor(input) {
        this.storage = input;
        this.totalRainWaterTrapped = 0;
    }

    trapRainWater = () => {
        for (let i = 1; i < this.storage.length - 1; i++) {
            let left = this.storage[i];
            for (let j = 0; j < i; j++) {
                left = this.max(left, this.storage[j]);
            }
            let right = this.storage[i];
            for (let j = i + 1; j < this.storage.length - 1; j++) {
                right = this.max(right, this.storage[j]);
            }
            this.totalRainWaterTrapped += (this.min(left, right) - this.storage[i]);
        }
    }

    max = (a, b) => {
        if (a > b)
            return a;
        else
            return b;
    }

    min = (a, b) => {
        if (a < b)
            return a;
        else
            return b;
    }
}

const x = new TrapRainWater([3, 0, 2, 0, 4]);
x.trapRainWater();
console.log(x.totalRainWaterTrapped);
