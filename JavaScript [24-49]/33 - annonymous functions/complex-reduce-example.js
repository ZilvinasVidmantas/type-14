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

console.group('7. Suskaičiuokite visų butų bendrą plotus sugrupuotus pagal miestą');
{
  function roomAreaReducer(prevTotalArea, room) {
    return prevTotalArea + room.area;
  }

  function flatAreaReducer(cityAreaObj, flat) {
    const flatArea = flat.rooms.reduce(roomAreaReducer, 0);
    if (flat.city in cityAreaObj) {
      // papildymas
      cityAreaObj[flat.city] += flatArea
    } else {
      // priskyrimas
      cityAreaObj[flat.city] = flatArea
    }

    return cityAreaObj;
  }

  const allFlatsArea = flats.reduce(flatAreaReducer, {});
  console.log(allFlatsArea);
}
console.groupEnd();
