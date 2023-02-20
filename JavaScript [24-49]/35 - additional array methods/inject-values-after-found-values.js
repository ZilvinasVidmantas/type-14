const numbersData = [4, -7, 2, 5, 6, 1, 2, 8, 4, -9, 2, 4, 5, 1];
//                           2           7            11 

console.group('5. Sukurkite funkciją, kuri po kiekvieno dvejeto įdėtų 777');
{
  const search = 5;

  const inject777AfterTwo = (arr) => {
    const array = [...arr];

    let indexOf2 = array.length;
    while (indexOf2 !== 0) {
      indexOf2 = array.lastIndexOf(5, indexOf2 - 1); // 0
      if (indexOf2 === -1) break;
      array.splice(indexOf2 + 1, 0, 777);
    }

    return array;
  }

  const injectedArr = inject777AfterTwo(numbersData);
  console.log(injectedArr);

  injectedArr.forEach((x, i, arr) => {
    if (x === search) console.log(arr[i + 1]);
  });

  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();