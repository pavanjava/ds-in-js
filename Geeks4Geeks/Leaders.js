class Leaders {

    constructor(elements) {
        this.array = elements;
        this.leades = [];
        this.flag = true;
    }

    findLeaders = () => {
        for (let i = 0; i < this.array.length; i++) {
            this.flag = true;
            for (let j = i + 1; j < this.array.length; j++) {
                this.flag = this.flag && this.array[i] >= this.array[j];
            }
            if (this.flag)
                this.leades.push(this.array[i]);
        }
        console.log(this.leades);
    }
}

const l = new Leaders([4, 1, 4]);
l.findLeaders();
