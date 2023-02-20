// VISUS UŽDAVINIUS IŠSPRĘSTI DESTRUKTŪRIZUOJANT
const flats = [{
  address: 'Vilnakiemio g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 16 },
  ],
  city: 'Vilnius',
  price: 120000
}, {
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
}, {
  address: 'Valatkų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
    { title: 'miegamasis2', area: 19 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Vareikų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 90000
}, {
  address: 'Majonezo pr. 17',
  rooms: [
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 50000
}, {
  address: 'Saulės g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
  ],
  city: 'Klaipėda',
  price: 80000
}];

// VISUS UŽDAVINIUS IŠSPRĘSTI DESTRUKTŪRIZUOJANT
const roomsAreaSumReducer = (prevRoomsAreaSum, room) => prevRoomsAreaSum + room.area;

console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
// '<address>, <city>'
{
  flats.forEach(({ address, city }) => console.log(`${address}, ${city}.`))
}
console.groupEnd();

console.group('2. Sukurkite masyvą iš butų kambarių skaičiaus');
// [4, 5, 3, 3, 3, 3]
{
  const flatsRoomCounts = flats.map(({ rooms }) => rooms.length);
  console.log(flatsRoomCounts);
}
console.groupEnd();

console.group('3. Suformuokite butų plotų masyvą');
{
  const flatsAreas = flats.map(({ rooms }) => rooms.reduce(roomsAreaSumReducer, 0));

  console.log(flatsAreas);
}
console.groupEnd();

console.group('4. Atrinkite 4 kambarių ir dedesnius butus');
// [{...}, {...}]
{
  const bigFlats = flats.filter(({ rooms }) => rooms.length >= 4);

  console.table(bigFlats);
}
console.groupEnd();

console.group('5. Apskaičiuokite visų butų bendrą plotą');
{
  const flatsAreas = flats.reduce((sum, { rooms }) => sum + rooms.reduce(roomsAreaSumReducer), 0);
  console.log(flatsAreas);
}
console.groupEnd();

console.group('6. Atrinkite 3 kambarių butus iš Kauno, kurių kaina mažesnė nei 100 000');
{
  const notExpensive3RoomFlatsFromKaunas = flats.filter(({ rooms, city, price }) =>
    rooms.length === 3 && city === 'Kaunas' && price < 100000
  );
  console.table(notExpensive3RoomFlatsFromKaunas);
}
console.groupEnd();

console.group('7. Perforkuokite butus formatu pateiktu komentaruose');
/*
  Masyvas sudarytas iš
  {
    address: string (`<address>, <city>`),
    city: string,
    price: number (1.1 * <price>).
    roomCount: number,
    squares: number,
    squarePrice: number,
  }
*/
{
  const refactoredFlats = flats.map(({ rooms, price, address, city }) => {
    const squares = rooms.reduce(roomsAreaSumReducer, 0);
    const newPrice = price * 1.1;

    return {
      address: `${address}, ${city}.`,
      city,
      price: newPrice,
      roomCount: rooms.length,
      squares,
      squarePrice: newPrice / squares,
    }
  });
  console.table(refactoredFlats);
}
console.groupEnd();

// VISUS UŽDAVINIUS IŠSPRĘSTI DESTRUKTŪRIZUOJANT

// ---------------------------------------- Manijakams --------------------------------------------
console.group('8. Atrinkite butus, kurie turi nors vieną kambarį, didesnį nei 19 kvadratų');

console.groupEnd();

console.group('9. Apskaičiuokite visų būtų kainos vidurkį');

console.groupEnd();

console.group('10. Apskaičiuokite visų būtų kainą už kvadratą');
// 20 - 20 000;           40 - 40 000; -> 60 000 / 60 -> 1000
//  1000                     1000                     -> 1000
// 20 - 20 000;           20 - 40 000;                -> 1500
//  1000                     2000                     -> 1500 
// 20 - 20 000;           30 - 60 000; -> 80 000/50   -> 1600 // butų kvadrato kaina
//  1000                    2000                      -> 1500 // butų kvadartų kainų vidurkis

console.groupEnd();
