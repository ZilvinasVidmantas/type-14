const fakeArray = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  length: 9,

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  },

  map(refactorCallback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const returnedValue = refactorCallback(this[i], i, this);
      newArr.push(returnedValue);
    }

    return newArr;
  },

  filter(filterCallback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      //                                     1.     2.  3.
      const returnedValue = filterCallback(this[i], i, this);
      if (returnedValue) {
        newArr.push(this[i]);
      }
    }

    return newArr;
  },

  // Jeigu reikia kaupti/formuoti reikšmę su kiekvienu masyvo elementu, naudojama metodologija:
  // 1. padeklaruojamas pradinis elementas
  // 2. Pradedamas ciklas
  //  2.1 Kiekviena iteracija papildo/keičia padeklaruotą kintamajį [1.]
  // 3. grąžinama/spausdinama reikšmė 

  // 1.
  reduce(reducer, initialValue) {
    let accumulator = initialValue ?? this[0];
    // 2.
    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
      // 2.1
      accumulator = reducer(accumulator, this[i], i, this);
    }

    // 3.
    return accumulator;
  }
}

console.group('Array.prototype.forEach implementation example');
{
  function printRed(el) {
    console.log(`%c${el}`, 'color: red');
  }

  fakeArray.forEach(printRed);
}
console.groupEnd();

console.group('Array.prototype.map implementation example');
{
  function double(number) {
    return number * 2;
  }
  const doubleNumbers2 = fakeArray.map(double);
  console.log(doubleNumbers2);
}
console.groupEnd();

console.group('Array.prototype.filter implementation example');
{
  function isEven(number) {
    return number % 2 === 0;
  }
  const evenNumbers = fakeArray.filter(isEven);
  console.log(evenNumbers);
}
console.groupEnd();

console.group('Array.prototype.reduce implementation example');
{
  function additionReducer(prevValue, element) {
    return prevValue + element;
  }

  const sum = fakeArray.reduce(additionReducer);
  console.log(sum);
}
console.groupEnd();
