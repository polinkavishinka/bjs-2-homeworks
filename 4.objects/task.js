let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);
let student3 = new Student("Ann", "female", 30);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age ; 
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
     this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) { 
    this.marks = [...marks];
   } else {
     this.marks.push(...marks);
   }
}

Student.prototype.getAverage = function () {
  let x = 0;
  let res = 0;
  for (i = 0; i < this.marks.length; i++) {
    x += this.marks[i];
  }
  return res = x / this.marks.length;
}


Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}