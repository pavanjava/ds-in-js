class NutsBolts {
    constructor() {
        this.nuts = ['^', '&', '%', '@', '#', '*', '$', '~', '!'];
        this.nutsAscii = [];
        this.bolts = ['~', '#', '@', '%', '&', '*', '$', '^', '!'];
        this.boltsAscii = [];
    }

    run = () => {
        console.log('~'.charCodeAt(0));
        for (let i = 0; i < this.nuts.length; i++) {
            for (let j = 0; j < this.bolts.length; j++) {
                if (this.nuts[i] === this.bolts[j]) {
                    this.nutsAscii.push(this.nuts[i].charCodeAt(0));
                    this.boltsAscii.push(this.bolts[j].charCodeAt(0));
                    break;
                }
            }
        }
        this.nutsAscii.sort((a, b) => a - b);
        this.boltsAscii.sort((a, b) => a - b);

        this.nutsAscii = this.nutsAscii.map((ascii) => String.fromCharCode(ascii));
        this.boltsAscii = this.boltsAscii.map((ascii) => String.fromCharCode(ascii));
    }
}

const nb = new NutsBolts();
nb.run();
console.log(nb.nutsAscii.toString());
console.log(nb.boltsAscii.toString());
