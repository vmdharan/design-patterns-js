class Grade {
    constructor(score) {
        var message;
        var letterGrade;

        if(score >= 90) {
            letterGrade = "A";
            message = "Excellent";
        } else if(score >= 75) {
            letterGrade = "B";
            message = "Very good";
        }  else if(score >= 60) {
            letterGrade = "C";
            message = "Not bad";
        } else if(score >= 40) {
            letterGrade = "D";
            message = "Needs improvement";
        } else {
            letterGrade = "F";
            message = "Fail";
        }

        this.letterGrade = letterGrade;
        this.message = message;
        this.randomNumber = Math.random();
    }    
};

class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;

        this.grade = new Grade(score);
    }
};

var students = [
    "Anita", "Bella", "Charles", "Dora", "Emily", "Fiona", "Gerald"
];
var scores = [
    10, 99, 91, 78, 45, 41, 50
];
var studentList = [];

for(let i=0; i<7; i++) {
    studentList.push(new Student(students[i], scores[i]));
}

console.log(studentList);
