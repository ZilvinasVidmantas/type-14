const numberArrayDemo = {
  0: 5,
  1: 6,
  2: 7,
  3: 8,
  4: 9,
  5: 10,
  length: 6,
};

/*
  forEach yra 'Array' iteracinis metodas. Jo tikslas, tiesiog įvykdytį argumentu perduotą funkciją,
  su kiekvienu masyvo elementu. Kviečiant argumentu perduotą funkciją, tai funkcijai yra siunčiami 
  3 argumentai, tokia tvarka:
    1. einamasis masyvo elementas,
    2. einamojo masyvo elemento indeksas
    3. masyvas per kurį yra iteruojama
*/

numberArrayDemo.__proto__.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

const printElement = (number) => console.log(number);

numberArrayDemo.forEach(printElement);

/*
  Array.prototype.map iteracinis metodas yra skirtas kurti naują masyvą, iš iteruojamo masyvo elementų.
  Iteruodamas per kiekvieną masyvo elementą, jis kviečia argumentu perduotą funkciją su 3 argumentais:
    1. einamasis elementas
    2. einamojo elemento indeksas
    3. iteruojamas masyvas
  Tos funkcijos grąžintas rezultatas dedamas į naują masyvą. Praiteravus per visus iteruojamo masyvo 
  elementus, suformuotas masyvas grąžinamas į iškvietimo vietą.
*/
numberArrayDemo.__proto__.map = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {

    const callbackResult = callback(this[i], i, this);
    newArray.push(callbackResult);
  }

  return newArray;
}

const doubledArray = numberArrayDemo.map((x) => x * 2);
console.log(doubledArray);

/*
  Array.prototype.filter iteracinis metodas yra skirtas kurti naują masyvą, atrenkant reikšmes PAGAL SALYGĄ iš iteruojamų masyvo elementų.
  Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją su argumentais:
    1. einamasis elementas
    2. einamojo elemento indeksas
    3. iteruojamas masyvas
  
  Jeigu perduotos funkcijos grąžinimo reikšmė yra 'true', einamasis elementas įdedamas į naujai formuojamą masyvą.
*/

numberArrayDemo.__proto__.filter = function (filterCallback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    const returnedValue = filterCallback(this[i], i, this);
    if (returnedValue) {
      newArr.push(this[i]);
    }
  }

  return newArr;
}

const equals = numberArrayDemo.filter(x => x % 2 === 0);
console.log(equals);

/*
  Array.prototype.reduce iteracinis metodas yra skirtas masyvo reikšmes sukaupti/sutraukti/perfomuoti į vieną reikšmę.
  Iteruodamas per kiekvieną masyvo elementą, jis vykdo argumentu perduotą funkciją, kviečiant ją su tokiais argumentais:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Kaupiamojo kintamojo reikšmė yra tokia, kokią grąžina praeitos iteracijos argumentu perduota funkcija (reducer).
  Antruoju 'Array.prototype.reduce' metodo argumentu, galima perduoti pradinę kaupiamojo kintamojo reikšmę.
  Jeigu pradinė, kaupiamojo kintamojo reikšmė nėra perduota, tuomet ji bus lygi pirmajam masyvo elementui 
  ir pradedama iteruoti nuo antrojo masyvo elemento.
*/

numberArrayDemo.__proto__.reduce = function (reducer, initialValue) {
  let accumulator = initialValue ?? this[0];
  for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
    accumulator = reducer(accumulator, this[i], i, this);
  }

  return accumulator;
}

const sum1 = numberArrayDemo.reduce((s, x) => s + x, 0);
console.log(sum1);

const sum2 = numberArrayDemo.reduce((s, x) => s + x);
console.log(sum2);

