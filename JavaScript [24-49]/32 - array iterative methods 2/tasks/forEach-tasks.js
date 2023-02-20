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

// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.forEach
console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
// <address>, <city>.
{
  function printFullAddress(flat) {
    console.log(`${flat.address}, ${flat.city}.`)
  }

  flats.forEach(printFullAddress)
}
console.groupEnd();

console.group('2. Atspausdinkite kiekvieno buto kambarių skaičių');
{
  function printRoomsCount(flat) {
    console.log(flat.rooms.length)
  }

  flats.forEach(printRoomsCount)
}
console.groupEnd();

console.group('3. Atspausdinkite kiekvieno buto bendrą plotą');
// Reikės susumuoti naudojant kaupimo algoritmą
{
  function printFlatArea(flat) {
    let totalArea = 0;
    for (let i = 0; i < flat.rooms.length; i++) {
      totalArea += flat.rooms[i].area;
    }
    console.log(totalArea);
  }

  flats.forEach(printFlatArea);
}
console.groupEnd();