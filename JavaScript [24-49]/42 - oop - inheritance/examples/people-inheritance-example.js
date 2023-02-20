class Person {
  name;
  surname;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get fullname() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends Person {
  grades;

  constructor(name, surname) {
    super(name, surname);
    this.grades = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  get avg() {
    return (this.grades.reduce((prevSum, grade) => prevSum + grade) / this.grades.length).toFixed(1)
  }
}

class Lecturer extends Person {
  salary;

  constructor(name, surname, salary) {
    super(name, surname);
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  raiseSalary(amount) {
    this.salary += amount;
  }
}

const lecturers = [
  new Lecturer('Fartas', 'Bizdalius', 1600),
  new Lecturer('Mangrūdėla', 'Varlinykas', 1800),
];

const students = [
  new Student('Servelatinas', 'Pieniškovskis'),
  new Student('Siaubė', 'Muilinė'),
  new Student('Kyborgas', 'Griauda'),
];

const people = [
  ...students,
  ...lecturers,
];

console.group('1. Lecturer individualus funkcionalumas');
{
  lecturers.forEach((lecturer) => console.log(lecturer.fullname, lecturer.getSalary()));
  lecturers.forEach((lecturer) => lecturer.raiseSalary(50));
  lecturers.forEach((lecturer) => console.log(lecturer.fullname, lecturer.getSalary()));
}
console.groupEnd();

console.group('2. Student individualus funkcionalumas');
{
  const generateGrade = () => Math.ceil(Math.random() * 10);

  students.forEach((student) => {
    for (let i = 0; i < 10; i++) {
      const grade = generateGrade();
      student.addGrade(grade);
    }
  });

  students.forEach((student) => console.log(student.fullname, student.avg))
}
console.groupEnd();

console.group('3. Student ir Lecturer bendras funkcionalumas');
{
  people.forEach((person) => console.log(person.fullname));
}
console.groupEnd();
