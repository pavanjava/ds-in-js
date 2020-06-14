class AlternateArray {

    constructor() {
        this.storage = [10, 20, 30, 40, 50, 60];
        this.storage2 = [];
        this.flag = true;
        this.lptr = this.storage.length - 1;
        this.sptr = 0;
    }

    rearrange = () => {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.flag) {
                this.storage2[i] = this.storage[this.lptr--];
            } else {
                this.storage2[i] = this.storage[this.sptr++];
            }
            this.flag = !this.flag;
        }
        this.storage = this.storage2;
        console.log(this.storage2);
    }
}

const aa = new AlternateArray();
aa.rearrange();
