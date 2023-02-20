const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
console.groupCollapsed('findIndex');
{
  /*
    Array.prototype.findIndex metodo esmė surasti  pirmą sutiktą elementą, pagal 'testavimo' funkciją
      Jei elementas surastas, grąžinamas to elemento index(vieta masyve)
      Jei elementas nerastas, grąžinama -1
  */
  const firstNegativeNumberIndex = numbers.findIndex(x => x < 0); // 3
  const firstDriverIndex = people.findIndex(p => p.hasCar); // 1
  const firstSusanIndex = people.findIndex(p => p.name === 'Susan'); // -1

  console.log({
    firstNegativeNumberIndex,
    firstDriverIndex,
    firstSusanIndex
  });
}
console.groupEnd();

console.groupCollapsed('find');
{
  /*
    Array.prototype.find metodo esmė surasti pirmą sutiktą elementą, pagal 'testavimo' funkciją
      Jei elementas surastas, grąžinamas tas elementas
      Jei elementas nerastas, grąžinama undefined
  */
  const firstNegativeNumber = numbers.find(x => x < 0);
  const firstDriver = people.find(p => p.hasCar);
  const firstSusan = people.find(p => p.name === 'Susan');

  console.log({
    firstNegativeNumber,
    firstDriver,
    firstSusan
  });
}
console.groupEnd();

console.groupCollapsed('some');
{
  /*
    Array.prototype.some metodo esmė patikrinti ar nors vienas masyvo elementas tenkina argumentu perduotos funkcijos 'testą'
      Jei NORS VIENOS iteracijos metu funkcijos grąžinama reikšmė buvo 'truthy', tokiu atveju visas metodas grąžina 'true'
      Jei NEI VIENOS iteracijos metu funkcijos grąžinama reikšmė NEBUVO 'truthy', tokiu atveju visas metodas grąžina 'false'
  */
  const hasEvenNumbers = numbers.some(x => x % 2 === 0);
  const hasFloatingNumbers = numbers.some(x => x % 1 !== 0);
  const hasWholeNumbers = numbers.some(x => x % 1 === 0);
  const hasFemale = people.some(p => p.sex === 'female');

  console.log({
    hasEvenNumbers,
    hasFloatingNumbers,
    hasWholeNumbers,
    hasFemale
  });
}
console.groupEnd();

console.groupCollapsed('every');
{
  /*
    Array.prototype.every metodo esmė patikrinti visi masyvo elementai tenkina argumentu perduotos funkcijos 'testą'
      Jei KIEKVIENOS iteracijos metu funkcijos grąžinama reikšmė buvo 'truthy', tokiu atveju visas metodas grąžina 'true'
      Jei NORS VIENOS iteracijos metu funkcijos grąžinama reikšmė NEBUVO 'truthy', tokiu atveju visas metodas grąžina 'false'
  */
  const madeOfWholeNumbers = numbers.every(x => x % 1 === 0);
  const allPeopleHaveIncome = people.every(p => p.income > 0);
  const allPeopleHaveName = people.every(p => p.name);

  console.log({
    madeOfWholeNumbers,
    allPeopleHaveIncome,
    allPeopleHaveName
  });
}
console.groupEnd();