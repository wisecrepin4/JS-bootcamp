class person {
  constructor(firstName, lastName, age, likes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
}
class student extends person {
  constructor(firstName, lastName, age, likes, status, grade) {
    super(firstName, lastName, age, likes);
    this.status = status;
    this.grade = grade;
  }
  trackgrade() {
    if (this.grade >= 70) {
      this.status = "passed";
    } else {
      this.status = "failed";
    }
  }

  getBio() {
    return `${this.firstName} ${this.lastName} has ${this.status}`;
  }

  updateGrade() {
    if (this.status !== "passed") {
      this.grade = this.grade + 40;
    }
  }
}

let me = new student(
  "shema ",
  "Josue",
  21,
  ["rapping", "drawing", "scrolling"],
  "",
  65
);

console.log(me.getBio());
me.trackgrade();
console.log(me.getBio());
me.updateGrade();
me.trackgrade();

console.log(me.getBio());
