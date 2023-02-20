console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function returnFirstArrayElement(array) {
    return array[0];
  }

  const numbers = [1, 2, 3];

  const res1 = returnFirstArrayElement(numbers);
  const res2 = returnFirstArrayElement(['vienas', 'du', 'trys']);
  const res3 = returnFirstArrayElement([-88, 66, 1]);

  console.log({ res1, res2, res3 });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function deleteFirstArrayElement(array) {
    const firstElement = array[0];
    for (let i = 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
    array.length -= 1;

    return firstElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('numbers before removal', numbers);
  const firstElement = deleteFirstArrayElement(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', firstElement)
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnArrayLastElement(array) {
    return array[array.length - 1]
  }

  const res1 = returnArrayLastElement([1, 2, 3]);
  const res2 = returnArrayLastElement([7, 9, 5, 6, 4, 8, 4]);

  console.log({ res1, res2 });
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastArrayElement(arr) {
    const lastElement = arr[arr.length - 1];
    arr.length -= 1;

    return lastElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('numbers before removal', numbers);
  const removedElement = removeLastArrayElement(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', removedElement)

}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

// console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
// {
//   // ...sprendimas ir spausdinimas
// }
// console.groupEnd();

// console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
// {
//   // ...sprendimas ir spausdinimas
// }
// console.groupEnd();

// console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
// {
//   // ...sprendimas ir spausdinimas
// }
// console.groupEnd();

// console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// // [0] => reikšmė
// // [1] => reikšmė
// // [2] => reikšmė
// {
//   // ... sprendimas ir spausdinimas
// }
// console.groupEnd();

// console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
// {
//   // ...sprendimas ir spausdinimas
// }
// console.groupEnd();

console.group('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function printIndexesRow(arr) {
    let resultRow = '';
    for (let i = 0; i < arr.length; i++) {
      const isNotLastElement = i < arr.length - 1;
      resultRow += arr[i];

      if (isNotLastElement) {
        resultRow += ', ';
      }
    }
    console.log(resultRow);
  }

  const testArr1 = [1, 2, 3];
  const testArr2 = ['trys', 'du', 'vienas'];

  printIndexesRow(testArr1);
  printIndexesRow(testArr2);

  // ...sprendimas ir spausdinimas
}
console.groupEnd();

// console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
// {
//   // ...sprendimas ir spausdinimas
// }
// console.groupEnd();

// console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
// //  [0]=>17 [1]=>8 [2]=>88 ..
// {
//   // ...sprendimas ir spausdinimas
// }
// console.groupEnd();
