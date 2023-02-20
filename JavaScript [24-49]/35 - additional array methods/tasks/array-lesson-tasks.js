const numbersData = [2, 4, -7, 2, 5, 6, 1, 2, 8, 4, -9, 2, 4, 5, 1];

// !!! Visas funkcijas atlikite kopijuodami orginalų masyvą, tam kad nepažeisti duomenų !!!
// !!! įterpadmi duomenis, atkreipkite dėmesį, jog keičiasi masyvo elementų ideksacija !!!

console.group('1. suraskite dvejetą ir po jo įterpkite 777');
{
  const numbers = [...numbersData];
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('2. suraskite antrą dvejetą ir prieš jį įterpkite 777');
{
  const numbers = numbersData.slice();
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('3. suraskite paskutinį dvejetą ir po jo įterpkite 777');
{
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('4. suraskite prieš paskutinį dvejetą ir prieš jį įterpkite 777');
{
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('5. Sukurkite funkciją, kuri po kiekvieno dvejeto įdėtų 777');
{
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('6. Sukurkite funkciją, kuri prieš kiekvieną dvejetą įdėtų 777');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('7. Sukurkite funkciją, kuri po kiekvieno nurodyto elemento įdėtų 777');
{
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('8. Sukurkite funkciją, kuri prieš kiekvieną nurodytą elementą įdėtų 777');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri po kiekvieno nurodyto elemento įdėtų naują nurodytą elementą');
{
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri prieš kiekvieną nurodytą elementą įdėtų naują nurodytą elementą');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();