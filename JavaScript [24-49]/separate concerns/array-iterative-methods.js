/*
  Masyvas, tai tiesiog objektas, kuris sukonstruotas pagal gamyklinį JS prototipą 'Array'. Šis 'Array' prototipas,
  turi vidines funkcijas - metodus. Dalį iš metodų jau nagrinėjome:
    push - įdeda elementą į masyvo galą
    pop - išima elementą iš masyvo galo 
    shift - išima elementą iš masyvo priekio
    unshift - įdeda elementą į masyvo priekį
  Masyvas turi ir kitokio pabūdžio metodus - iteracinius metodus. Šie metodai reikalauja funkcijos,
  kuri bus iškviečiama su kiekvienu masyvo elementu. Priklausomai nuo masyvo iteracinio metodo, toji funkcija turi įgyvendinti
  reikalavimus, kurių dėka bus pasiekta iteracinio metodo esmė.
*/

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

console.groupCollapsed('Array.prototype.forEach');
{
  /*
    forEach yra paprasčiausias 'Array' iteracinis metodas. Jo tikslas, tiesiog įvykdytį argumentu paduotą funkciją,
    su kiekvienu masyvo elementu. Funkcija neturi nieko grąžinti, ji tiesiog įsivykdo. Kviečiant argumentu
    perduotą funkciją su kiekvienu masyvo elementu, tai funkcijai yra siunčiami 3 argumentai, tokia tvarka:
      1. einamasis masyvo elementas,
      2. einamojo masyvo elemento indeksas
      3. masyvas per kurį yra iteruojama
    Priklausomai nuo vykdomos logikos, perduodamoji funkcija gali pasiimti atitinkamą siunčiamų parametrų kiekį. (1-3)
    Parametrų pavadinimus galite rinktis laisvai, geriausia vadinti
    juos taip, jog jie sufleruotų perduodamų argumentų prasmę. 
    Svarbu pastebėti, jog siunčiamų argumentų eiliškumas niekada nesikeičia, ir jeigu, perduodamos funkcijos logikoje reikia
    tik indekso (2.) reikšmės, vistiek turime priimti argumentu ir patį iteruojamą elementą (1.), nes indeksas visada bus
    perduodamas antruoju argumentu.
  */

  let femaleCount = 0;
  let maleCount = 0;
  function printPersonFullName(person) {
    console.log(person.name, person.surname);
  }
  function increasePeopleCount(person) {
    if (person.sex === 'female') femaleCount++;
    else if (person.sex === 'male') maleCount++;
  }
  function printIncomeAndSex(el) {
    console.log(el.sex, el.income);
  }
  function printAgeAndSex(vadinuKaipNoriu) {
    console.log(vadinuKaipNoriu.sex, vadinuKaipNoriu.income);
  }

  people.forEach(printPersonFullName);
  console.log({ femaleCount, maleCount });
  people.forEach(increasePeopleCount);
  console.log({ femaleCount, maleCount });
  people.forEach(printIncomeAndSex);
  people.forEach(printAgeAndSex);
}
console.groupEnd();
console.log('---------------------------\n');

console.groupCollapsed('Array.prototype.map');
{
  /*
    Array.prototype.map iteracinis metodas yra skirtas kurti naują masyvą, iš iteruojamo masyvo elementų. Iteruodamas per kiekvieną masyvo elementą,
    jis vykdo argumentu perduotą funkciją, su kiekvienu masyvo elmentu, jo indeksu ir iteruojamu masyvu. Tos funkcijos grąžintas rezultatas 
    dedamas į naują masyvą. Praiteravus per visus iteruojamo masyvo elementus iteracinis metodas 'map' grąžina suformuotą masyvą į iškvietimo vietą.
    
    Suformavus naują masyvą, jis visada turės tiek pat elementų kaip ir pradinis masyvas.
    Šis metodas dažniausiai naudojamas pradinio masyvo reikšmėms:
      * redaguoti
      * papildyti
      * sumažinti
      * keisti struktūrą, formą
    
    Kaip ir Array.prototype.forEach atveju, perduodamoji funkcija gali priimti 3 parametrus:
      1. einamasis elementas
      2. einamojo elemento indeksas
      3. iteruojamas masyvas
    Perduodamoji funkcija PRI-VA-LO grąžinti reikšmę, kuri bus dedama į naujai formuojamą masyvą.
  */
  {
    const dishes = [
      { name: 'plate', state: 'unwashed' },
      { name: 'cup', state: 'unwashed' },
      { name: 'fork', state: 'unwashed' },
      { name: 'bowl', state: 'unwashed' },
    ];

    function washDish(dish) {
      // Kadangi parametru gauta reikšmė bus objektas (nuorodos tipo), turime daryti kopiją, tam kad nepakeisti pradinių duomenų.
      // Šiuo atveju, mums užteks seklios kopijos, tik todėl, jog kiekvieno objekto savybė yra primityvaus tipo
      // Jeigu nors viena iš savybių, būtų nuoros tipo, tuomet reikėtų atlikti gilų kopijavimą, pvz.: JSON.parse(JSON.stringify(dish));
      const result = { ...dish };
      result.state = 'clean';
      return result;
    }

    const cleanDishes = dishes.map(washDish);
    console.log({
      dishes,
      cleanDishes
    });
  }

  function getIncome(person) {
    return person.income;
  }
  function getFullNames(person) {
    return person.name + ' ' + person.surname;
  }
  function formAnonymousPerson(person) {
    return {
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    };
  }
  function raiseIncome(person) {
    return {
      ...person, // išskleidžiamos visos person objekto savybės naujai formuojamame objekte, kuris bus grąžintas.
      income: 1.07 * person.income // Padidinamos įplaukos 7%
    }
  }

  const incomes = people.map(getIncome); // [1200, 1300, 0, 2400, 1200, 364];
  const fullnames = people.map(getFullNames);
  const anonymousPeople = people.map(formAnonymousPerson);
  const wealthierPeople = people.map(raiseIncome);

  console.table(people);
  console.log(incomes);
  console.log(fullnames);
  console.table(anonymousPeople);
  console.table(wealthierPeople);
}
console.groupEnd();
console.log('---------------------------\n');

console.groupCollapsed('Array.prototype.filter');
{
  /*
    Array.prototype.filter iteracinis metodas yra skirtas kurti naują masyvą, ATRENKANT REIKŠMES PAGAL SALYGĄ iš iteruojamų masyvo elementų.
    Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai einamajį elementą, jo indeksą ir 
    iteruojamajį masyvą. Jeigu perduotos funkcijos grąžinimo reikšmė yra 'true', einamasis elementas įdedamas į naujai formuojamą masyvą.
    Priešingu atveju, jeigu parametru perduotos funkcijos grąžinimo rezultatas su einamuolu elementu yra false, tuomet einamasis elementas
    NĖRA įdedamas į naujai formuojamą masyvą.
    
    Kaip ir Array.prototype.forEach atveju, perduodamoji (tikrinimo) funkcija gali priimti 3 parametrus:
      1. einamasis elementas
      2. einamojo elemento indeksas
      3. iteruojamas masyvas
    Perduodamoji funkcija PRI-VA-LO grąžinti BOOLEAN, kur priklausomai nuo jos grąžinimo:
      * true - elementas bus pridedamas į naujai formuojamą masyvą.
      * false - elementas NEBUS pridedamas į naujai formuojamą masyvą.
  */

  function largerThan10(num) {
    return num > 10;
  }
  function smallerThen8(num) {
    return num < 8;
  }
  function isEven(num) {
    return num % 2 === 0;
  }
  function isOdd(num) {
    return num % 2 === 1;
  }
  function isWoman(person) {
    return person.sex === 'female';
  }

  const numbersLargerThan10 = numbers.filter(largerThan10);
  const numbersSmallerThen8 = numbers.filter(smallerThen8);
  const numbersEven = numbers.filter(isEven);
  const numbersOdd = numbers.filter(isOdd);
  const women = people.filter(isWoman);

  console.log({
    numbersLargerThan10,
    numbersSmallerThen8,
    numbersEven,
    numbersOdd,
    women
  });
}
console.groupEnd();
console.log('---------------------------\n');

console.groupCollapsed('Array.prototype.reduce');
{
  /*
  Array.prototype.reduce iteracinis metodas yra skirtas masyvo reikšmes sukaupti/sutraukti/perfomuoti į vieną reikšmę.
  Iteruodamas per kiekvieną masyvo elementą, jis vykdo argumentu perduotą funkciją, kviečiant ją su tokiais argumentais:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Kaupiamojo kintamojo reikšmė yra tokia, kokią grąžina praeitos iteracijos argumentu perduota funkcija.
  Antruoju 'Array.prototype.reduce' metodo argumentu, galima perduoti pradinę kaupiamojo kintamojo reikšmę. Jeigu pradinė, kaupiamojo kintamojo reikšmė nėra perduota, tuomet ji bus lygi pirmajam masyvo elementui ir pradedama iteruoti nuo antrojo masyvo elemento.
  
  Perduodamosios funkcijos aprašas:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Perduodamoji funkcija PRI-VA-LO grąžinti kaupiamojo kintamojo reikšmę.
*/
  // SUMA
  {
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      const el = numbers[i];
      sum = sum + el;
    }
    const numbersSum = sum;
  }
  const numbersSum = numbers.reduce((sum, el) => sum + el);
  // VIDURKIS
  {
    let avg = 0;
    for (let i = 0; i < numbers.length; i++) {
      const el = numbers[i];
      avg = avg + el / numbers.length
    }
    const numbersAvg = avg;
  }
  const numbersAvg = numbers.reduce((avg, el) =>avg + el / numbers.length, 0);
  // reduce pavyzdys, kuomet kaupiame reikšmę priklausant nuo aplinkybių (šiuo atveju tikriname ar einamieji elementai teigiami||neigiami)
  const numbersSumPositive = numbers.reduce((sum, el) => el > 0 ? sum + el : sum, 0);
  const numbersSumNegative = numbers.reduce((sum, el) => el < 0 ? sum + el : sum, 0);

  const peopleAgeAvg = people.reduce((avg, p) => avg + p.age / people.length, 0);
  // Kuomet naudojame metodų grandinėlės metodologija, mums dažnai reikia nuorodos į masyvą, per kurio elementus yra iteruojama.
  // Kadangi metodas vykdomas (šiuo atveju reduce) su tarpinio rezultato duomenimis (atfiltruotas vyrų masyvas), neturime į jį nuorodos.
  // Būtent tokiu atveju, mums yra labai naudinga pasinaudoji paskutniu "callbackFn" funckcijos parametru. 
  //                                                                                          ↙
  //                                                                           (avg, p, _, arr)

  const maleAgeAvg = people
    .filter(p => p.sex === 'male')
    .reduce((avg, p, _, arr) => avg + p.age / arr.length, 0);

  const femaleAgeAvg = people
    .filter(p => p.sex === 'female')
    .reduce((avg, p, _, arr) => avg + p.age / arr.length, 0);

  console.log({
    numbersSum,
    numbersAvg,
    numbersSumPositive,
    numbersSumNegative,
    peopleAgeAvg,
    maleAgeAvg,
    femaleAgeAvg,
  });
}
console.groupEnd();
