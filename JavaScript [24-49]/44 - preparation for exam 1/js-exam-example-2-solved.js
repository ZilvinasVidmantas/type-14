const peopleData = [{
  name: 'Serbentautas',
  surname: 'Bordiūras',
  age: 15,
  sex: 'male',
  items: [
    { title: 'ball', price: 60 },
    { title: 'racket', price: 80 },
    { title: 'gum', price: 2 },
  ],
}, {
  name: 'Joburė',
  surname: 'Vaitkutytė',
  age: 9,
  sex: 'female',
  items: [
    { title: 'cards', price: 4 },
    { title: 'sweets', price: 1 },
  ],
}, {
  name: 'Verlas',
  surname: 'Gudrioras',
  age: 48,
  sex: 'male',
  items: [
    { title: 'wallet', price: 120 },
    { title: 'cash', price: 92 },
  ],
}, {
  name: 'Fanta',
  surname: 'Burbulienė',
  age: 32,
  sex: 'female',
  items: [
    { title: 'lipstick', price: 24 },
    { title: 'fanta', price: 2 },
    { title: 'parfume', price: 120 },
  ],
}, {
  name: 'Ežvyra',
  surname: 'Paplūdė',
  age: 76,
  sex: 'female',
  items: [
    { title: 'parfume', price: 24 },
    { title: 'stick', price: 7 },
    { title: 'cash', price: 320 },
  ],
}, {
  name: 'Čiobaras',
  surname: 'Ramūnskas',
  age: 72,
  sex: 'male',
  items: [
    { title: 'cap', price: 18 },
    { title: 'pipe', price: 32 },
    { title: 'sunglasses', price: 120 },
  ],
}, {
  name: 'Vabalas',
  surname: 'Skėrys',
  age: 17,
  sex: 'Male',
  items: [
    { title: 'poker cards', price: 8 },
    { title: 'braclet', price: 80 },
  ],
}];

class Person {
  name;
  surname;
  age;
  sex;
  items;

  constructor({
    name,
    surname,
    age,
    sex,
    items }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.items = items;
  }

  // 3.
  get itemsWorth() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  // 4.
  get itemsNames() {
    return this.items.map((item) => item.title).join(', ');
  }

  // 9.
  get info() {
    const itemsList = this.items.map(p => `\t\t* ${p.title}: ${p.price}`).join('\n');
    return `${this.name} ${this.surname} - ${this.age}, ${this.sex}:\n\t* items:\n${itemsList}\n\t* items worth: ${this.itemsWorth}`;
  }
}

// 2.
let people;

console.group('1. Sukurkite klasę Person, kuri turėtų savybes pagal <peopleData> duomenis ir jas priskirkite');
{
  console.dir(Person);
  console.log(new Person({
    name: 'Serbentautas',
    surname: 'Bordiūras',
    age: 15,
    sex: 'male',
    items: [
      { title: 'ball', price: 60 },
      { title: 'racket', price: 80 },
      { title: 'gum', price: 2 },
    ],
  }));
}
console.groupEnd();

console.group('2. Panaudokite duomenis <peopleData>, kad sukurti Person klasės objektų masyvą');
{
  people = peopleData.map(p => new Person(p));
  console.table(people);
}
console.groupEnd();

console.group('3. Sukurkite get\'erį <itemsWorth>, kuriuo gaunama visų Person.items daiktų vertė.');
{
  people.forEach((p) => console.log(p.itemsWorth));
}
console.groupEnd();

console.group('4. Sukurkite get\'erį <itemsNames>, kur būtų gaunami visų daiktų pavadinimai atskirti kableliu ir tarpu');
{
  people.forEach((p) => console.log(p.itemsNames));
}
console.groupEnd();

console.group('5. Atrinkite visus nepilnamečius vyrus');
{
  const youngMen = people.filter(p => p.sex.toLowerCase() === 'male' && p.age < 18);
  console.table(youngMen);
}
console.groupEnd();

console.group('6. Patikrinkite, ar yra pensininkų, kurie turėtų daiktų už daugiau nei 500');
{
  const hasRichPensioniers = people.some(p => p.itemsWorth > 500 && p.age > 65);
  console.table({ hasRichPensioniers });
}
console.groupEnd();

console.group('7. Atrinkite visus žmones kurie turi grynų pinigų (cash)');
{
  const peopleWithCash = people.filter(p => p.itemsNames.includes('cash'));
  console.table(peopleWithCash);
}
console.groupEnd();

console.group('8. Suskaičiuokite visų pilnamečių, be ne pensininkų pinigus');
{
  const midageCommonCash = people
    .filter(p => p.age >= 18 && p.age < 65)
    .reduce((sum, p) => sum + p.itemsWorth, 0);
  console.log(midageCommonCash);
}
console.groupEnd();

console.group('9. Sukurkite get\'erį <info>, kuriame matytūsi asmens duomenys formatu, kuris pateiktas komentaruose. Atspausdinkite kiekvieno asmens get\'erį <info>.');
{
  /*
  ↓↓↓ formatas ↓↓↓
  <name> <surname> - <age>, <sex>:
      * items:
          * <items[0].title>: <items[0].price>
          * <items[1].title>: <items[1].price>
          ... ... ... ... ... ... ... ... ... ...
          * <items[N-1].title>: <items[N-1].price>
      * items worth: <totalWorth>
  ↑↑↑ formatas ↑↑↑

  pvz1. : 
  Serbentautas Bordiūras - 15, male:
      * items:
          * ball: 60
          * racket: 80
          * gum: 2
      * items worth: 142
  
  pvz2. : 
  Ežvyra Paplūdė - 76, female:
      * items:
          * parfume: 24
          * stick: 7
          * cash: 320
      * items worth: 351
  */
  people.forEach(p => console.log(p.info));
}
console.groupEnd();

console.group('10. Suformuokite masyvą iš objektų. Formuojamo objekto savybės pavaiduotos komentaruose');
{
  /*
  Result object
  {
    fullname,
    age,
    sex,
    itemsWorth,
    itemsNames,
  }

  pvz. :
  {
    fullname: "Serbentautas Bordiūras",
    age: 15,
    sex: "male",
    itemsWorth: 142,
    itemsNames: "ball, racket, gum",
  }
  */

  const formattedPeople = people.map(({
    name,
    surname,
    age,
    sex,
    itemsWorth,
    itemsNames
  }) => ({
    fullname: `${name} ${surname}`,
    age,
    sex,
    itemsWorth,
    itemsNames,
  }));
  console.table(formattedPeople);
}
console.groupEnd();