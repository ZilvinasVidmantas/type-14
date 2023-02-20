const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
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
console.groupCollapsed('includes');
{
  /*
    Array.prototype.includes patikrina ar masyve yra reikšmė
      jei yra -> true
      jei nėra -> false
  */
  const hasNumberTwelve = numbers.includes(12);
  const hasJohn = ['Nausy', 'Fanalija', 'Kepinys'].includes('John');
  const hasJonas = people.map(p => p.name).includes('Jonas');

  console.log({
    hasNumberTwelve,
    hasJohn,
    hasJonas
  });
}
console.groupEnd();

console.groupCollapsed('indexOf');
{
  /*
    Array.prototype.indexOf, ieško TOKIO elemento masyve kaip nurodyta pirmuoju parametru
      Jei nurodytas antrasis parametras, tuomet paieška pradeda tuo indeksu, koks antrasis parametras.
      Jei elementas nerastas, indexOf metodas grąžina -1.
    
    [1, 2, 3, 4, 1, 2, 3, 1, 2].indexOf(5); result -> -1
    [1, 2, 3, 4, 1, 2, 3, 1, 2].indexOf(3); result -> 2
            ↖  index -> 2
    [1, 2, 3, 4, 1, 2, 3, 1, 2].indexOf(3, 4); result -> 6
                  ↖  start -> 4 (2 parametras)
  */
  const numbers = [1, 2, 3, 4, 1, 2, 3, 1, 2];

  console.log({
    '[1, 2, 3, 4, 1, 2, 3, 1, 2].indexOf(5)': numbers.indexOf(5),
    '[1, 2, 3, 4, 1, 2, 3, 1, 2].indexOf(3)': numbers.indexOf(3),
    '[1, 2, 3, 4, 1, 2, 3, 1, 2].indexOf(3, 4)': numbers.indexOf(3, 4)
  });

  const indexesOfNumber3 = [];
  let index = -1;
  do {
    index = numbers.indexOf(3, index + 1);
    if (index === -1) {
      break;
    }
    indexesOfNumber3.push(index);
  } while (true);
  console.log(indexesOfNumber3);
}
console.groupEnd();

console.groupCollapsed('lastIndexOf');
{
  /*
    Array.prototype.lastIndexOf veikia tuo pačiu principu kaip Array.prototype.indexOf, bet ieško elementų
    nuo galo.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
  */
}
console.groupEnd();
