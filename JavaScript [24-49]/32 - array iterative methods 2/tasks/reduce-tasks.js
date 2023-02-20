const flats = [
  {
    address: 'Vilnakiemio g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 16 },
    ],
    city: 'Vilnius',
    price: 120000
  },

  {
    address: 'Ruginių pr. 17',
    rooms: [
      { title: 'virtuvė', area: 18 },
      { title: 'svetainė', area: 18 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 12 },
      { title: 'miegamasis2', area: 16 },
    ],
    city: 'Kaunas',
    price: 120000
  },

  {
    address: 'Saulės g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
    ],
    city: 'Klaipėda',
    price: 80000
  },
];

const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];


// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.reduce
console.group('1. Sudėkite visus skaičius naudojant Array.prototype.reduce');
{
  function sumReducer(prevSum, el) {
    return prevSum + el;
  }

  const sum = numbers.reduce(sumReducer);
  console.log(sum);
}
console.groupEnd();

console.group('2. Sudėkite visus teigiamus skaičius naudojant Array.prototype.reduce');
{
  function sumPositiveReducer(prevSum, el) {
    if (el > 0) return prevSum + el
    return prevSum;
  }

  const sumPositives = numbers.reduce(sumPositiveReducer, 0);
  console.log(sumPositives);
}
console.groupEnd();

console.group('3. Sudėkite visus neigiamus skaičius naudojant Array.prototype.reduce');
{
  function sumNegativeReducer(prevSum, el) {
    if (el < 0) return prevSum + el
    return prevSum;
  }

  const sumNegatives = numbers.reduce(sumNegativeReducer, 0);
  console.log(sumNegatives);
}
console.groupEnd();

console.group('4. Suskaičiuokite visų butų kainų sumą');
{
  function flatPriceReducer(prevTotalPrice, flat) {
    return prevTotalPrice + flat.price;
  }

  const allFlatPrice = flats.reduce(flatPriceReducer, 0);
  console.log(allFlatPrice);
}
console.groupEnd();

console.group('5. Suskaičiuokite vieno buto plotą');
{
  function roomAreaReducer(prevTotalArea, room) {
    return prevTotalArea + room.area;
  }

  const firstRoomArea = flats[0].rooms.reduce(roomAreaReducer, 0);
  console.log(firstRoomArea);
}
console.groupEnd();

console.group('6. Suskaičiuokite visų butų bendrą plotą');
{
  function roomAreaReducer(prevTotalArea, room) {
    return prevTotalArea + room.area;
  }

  function flatAreaReducer(prevTotalArea, flat) {
    return prevTotalArea + flat.rooms.reduce(roomAreaReducer, 0);
  }

  const allFlatsArea = flats.reduce(flatAreaReducer, 0);
  console.log(allFlatsArea);
}
console.groupEnd();
