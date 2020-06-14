function Month() {

    this.getMonth = function (index) {
        switch (index) {
            case 1:
                return "January";
                break;
            case 2:
                return "February";
                break;
            case 3:
                return "March";
                break;
            case 4:
                return "April";
                break;
            case 5:
                return "May";
                break;
            case 6:
                return "June";
                break;
            case 7:
                return "July";
                break;
            case 8:
                return "August";
                break;
            case 9:
                return "September";
                break;
            case 10:
                return "October";
                break;
            case 11:
                return "November";
                break;
            case 12:
                return "December";
                break;
            default:
                return "Not a valid month";
                break;
        }
    }

}

let month = new Month();
console.log(month.getMonth(10));


function Factorial() {
    this.getFactorial = function (x) {
        if (x === 0) {
            return 1;
        }
        return x * this.getFactorial(x - 1);
    }
}

console.log(new Factorial().getFactorial(5));
