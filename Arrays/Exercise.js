class Student {
    constructor() {
        this.name = '';
        this.grade = 0;
    }

    put = (name, grade) => {
        if (isNaN(grade)) {
            return "Grade should be a number";
        }
        this.grade = grade;
        this.name = name;
    }
}

class Grades {

    constructor() {
        this.count = 0;
        this.storage = [];
    }

    store = (student) => {
        if (typeof student === "object") {
            this.storage[this.count] = student;
            this.count++;
        }
    }

    display = () => {
        this.storage.forEach(student => console.log(student));
    }

    average = () => {
        let sum = 0;
        this.storage.forEach((student) => {
            sum = sum + student.grade;
        });
        return sum / this.count;
    }
}

const student1 = new Student();
student1.put('pavan', 8);

const student2 = new Student();
student2.put('deepak', 10);

const student3 = new Student();
student3.put('arun', 10);

const grades = new Grades();
grades.store(student1);
grades.store(student2);
grades.store(student3);

grades.display();

console.log(grades.average());
