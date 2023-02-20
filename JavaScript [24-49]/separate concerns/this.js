'use strict';

function atspausdintiPilnaVarda(...args) {
  if (!this) {
    console.warn('funkcija "atspausdintiPilnaVarda" neturi this konteksto');
    return;
  }
  console.log(args);
  console.log(`${this.name} ${this.surname}`);
}

atspausdintiPilnaVarda();

const student = {
  name: "Balandis",
  surname: "Neužkalnauskas",
  printFullName: atspausdintiPilnaVarda
};

const accountant = {
  name: "Skaitiklis",
  surname: "Nupyzdenis",
  printFullName: atspausdintiPilnaVarda
};

student.printFullName();
accountant.printFullName();

student.printFullName.call(
  {
    name: "Callinsas",
    surname: "ThisPakeitauskas"
  },
  1,
  2,
  3
);
student.printFullName.apply(
  {
    name: "Aplaijeris",
    surname: "ThisPakeitauskas"
  },
  [1, 2, 3]
);
const printFullnameThisBinded = student.printFullName.bind({
  name: "Meilė",
  surname: "IkiGalo"
});
const printFullnameThisDuplicateBinded = printFullnameThisBinded.bind({
  name: "Žavuolė",
  surname: "Meiluytė"
});
printFullnameThisBinded();
printFullnameThisDuplicateBinded();

printFullnameThisBinded.call({
  name: "Callinsas",
  surname: "ThisPakeitauskas"
});
printFullnameThisBinded.apply({
  name: "Aplaijeris",
  surname: "ThisPakeitauskas"
});

// lambda išraiška

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  printFullName = () => {
    console.log(`${this.name} ${this.surname}`);
  }
}

const director = new Person('Kadras', 'Filmauskas');

console.log(director);

director.printFullName.call({
  name: 'Vardenis',
  surname: 'Pavardenis',
});
