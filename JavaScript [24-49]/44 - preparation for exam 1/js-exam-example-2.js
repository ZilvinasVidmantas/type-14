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

console.group('1. Sukurkite klasę Person, kuri turėtų savybes pagal <peopleData> duomenis ir jas priskirkite');
{
}
console.groupEnd();

console.group('2. Panaudokite duomenis <peopleData>, kad sukurti Person klasės objektų masyvą');
{
}
console.groupEnd();

console.group('3. Sukurkite get\'erį <itemsWorth>, kuriuo gaunama visų Person.items daiktų vertė.');
{
}
console.groupEnd();

console.group('4. Sukurkite get\'erį <itemsNames>, kur būtų gaunami visų daiktų pavadinimai atskirti kableliu ir tarpu');
{
}
console.groupEnd();

console.group('5. Atrinkite visus nepilnamečius vyrus');
{
}
console.groupEnd();

console.group('6. Patikrinkite, ar yra pensininkų, kurie turėtų daiktų už daugiau nei 500');
{
}
console.groupEnd();

console.group('7. Atrinkite visus žmones kurie turi grynų pinigų (cash)');
{
}
console.groupEnd();

console.group('8. Suskaičiuokite visų pilnamečių, be ne pensininkų pinigus');
{
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
}
console.groupEnd();